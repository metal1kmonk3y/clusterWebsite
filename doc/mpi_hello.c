/*
 * Copyright (c) 2004-2006 The Trustees of Indiana University and Indiana
 *                         University Research and Technology
 *                         Corporation.  All rights reserved.
 * Copyright (c) 2006      Cisco Systems, Inc.  All rights reserved.
 *
 * Sample MPI "hello world" application in C
 *
 * Taken from open-mpi/examples, then modified by J. Hursey
 *
 */

#include <stdio.h>
#include "mpi.h"

int main(int argc, char* argv[])
{
    int rank, size, len;
    char version[MPI_MAX_LIBRARY_VERSION_STRING];
    char processor[MPI_MAX_PROCESSOR_NAME];

    /*
     * Initialize the MPI library
     */
    MPI_Init(&argc, &argv);

    /*
     * Get my 'rank' (unique ID)
     */
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);

    /*
     * Get the size of the world (How many other 'processes' are there)
     */
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    /*
     * Get the library version string from MPI (just for fun)
     */
    MPI_Get_library_version(version, &len);

    /*
     * Get the processor name (usually the hostname)
     */
    MPI_Get_processor_name(processor, &len);

    /*
     * Print a message from this process
     */
    printf("Hello, world, I am %2d of %d, (%s, %d)\n", rank, size, processor, len);

    /*
     * Shutdown the MPI library before exiting
     */
    MPI_Finalize();

    return 0;
}
