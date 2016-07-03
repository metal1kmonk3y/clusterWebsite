/******************************************************************************
 * OpenMP + MPI program
 * Amalgamation of OpenMP hello world and MPI hello world programs
 *
 * J. Hursey 06/25/2015
 ******************************************************************************/
#include "mpi.h"
#include <omp.h>
#include <stdio.h>
#include <stdlib.h>

int main (int argc, char *argv[]) 
{
    int nthreads, tid;

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
     * Fork a team of threads giving them their own copies of variables
     */
#pragma omp parallel private(nthreads, tid)
    {

        /* Obtain thread number */
        tid = omp_get_thread_num();
        printf("%s) Hello World from thread = %02d\n", processor, tid);

        /* Only master thread does this */
        if (tid == 0) 
            {
                nthreads = omp_get_num_threads();
                printf("%s) Number of threads = %02d\n", processor, nthreads);
            }

    }  /* All threads join master thread and disband */


    /*
     * Shutdown the MPI library before exiting
     */
    MPI_Finalize();


    return 0;
}

