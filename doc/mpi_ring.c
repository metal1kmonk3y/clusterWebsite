/*
 * Copyright (c) 2004-2006 The Trustees of Indiana University and Indiana
 *                         University Research and Technology
 *                         Corporation.  All rights reserved.
 * Copyright (c) 2006      Cisco Systems, Inc.  All rights reserved.
 *
 * Simple ring test program
 *
 * Taken from open-mpi/examples, then modified by J. Hursey
 *
 */

#include <stdio.h>
#include <unistd.h> // usleep
#include "mpi.h"

int main(int argc, char *argv[])
{
    int rank, size, next, prev, message, tag = 201;

    /*
     * Start up MPI
     */
    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);
 
    /*
     * Calculate the rank of the next process in the ring.  Use the
     * modulus operator so that the last process "wraps around" to
     * rank zero.
     */
    next = (rank + 1) % size;
    prev = (rank + size - 1) % size;

    /*
     * If we are the "master" process (i.e., MPI_COMM_WORLD rank 0),
     * put the number of times to go around the ring in the
     * message.
     */
    if (0 == rank) {
        message = 10;

        printf("Process 0 sending %d to %d, tag %d (%d processes in ring)\n", 
               message, next, tag, size);
        
        printf("Process %2d of %2d. Prev = %2d, Next = %2d (Send)\n", rank, size, prev, next);
        usleep(1000); // simulate some work

        MPI_Send(&message, 1, MPI_INT, next, tag, MPI_COMM_WORLD); 
    }

    /*
     * Pass the message around the ring.  The exit mechanism works as
     * follows: the message (a positive integer) is passed around the
     * ring.  Each time it passes rank 0, it is decremented.  When
     * each processes receives a message containing a 0 value, it
     * passes the message on to the next process and then quits.  By
     * passing the 0 message first, every process gets the 0 message
     * and can quit normally.
     */
    while (1) {
        // Receive from my previous neighbor
        MPI_Recv(&message, 1, MPI_INT,
                 prev, tag, MPI_COMM_WORLD, 
                 MPI_STATUS_IGNORE);

        // Checkin during the first round - for debugging
        if( 10 == message && 0 != rank ) {
            printf("Process %2d of %2d. Prev = %2d, Next = %2d (Recv/Send Checkin)\n", rank, size, prev, next);
            usleep(1000); // simulate some work during checkin
        }

        // Each time rank 0 sees the marker decrement it
        if (0 == rank) {
            --message;
            printf("Process 0 decremented value: %d\n", message);
            usleep(1000); // simulate some work
        }

        // Send to my next neighbor
        MPI_Send(&message, 1, MPI_INT,
                 next, tag, MPI_COMM_WORLD);

        // If all done then cleanup
        if (0 == message) {
            printf("Process %d exiting\n", rank);
            break;
        }
    }

    /*
     * The last process does one extra send to process 0, which needs
     * to be received before the program can exit
     */
    if (0 == rank) {
        MPI_Recv(&message, 1, MPI_INT, prev, tag, MPI_COMM_WORLD,
                 MPI_STATUS_IGNORE);
    }
    
    /*
     * All done
     */
    MPI_Finalize();

    return 0;
}
