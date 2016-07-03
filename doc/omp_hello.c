/******************************************************************************
 * FILE: omp_hello.c
 * DESCRIPTION:
 *   OpenMP Example - Hello World - C/C++ Version
 *   In this simple example, the master thread forks a parallel region.
 *   All threads in the team obtain their unique thread number and print it.
 *   The master thread only prints the total number of threads.  Two OpenMP
 *   library routines are used to obtain the number of threads and each
 *   thread's number.
 * AUTHOR: Blaise Barney  5/99
 * LAST REVISED: 04/06/05
 *
 * Original taken from:
 *   https://computing.llnl.gov/tutorials/openMP/exercise.html
 * Updated by J. Hursey on 06/25/2015
 ******************************************************************************/
#include <omp.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main (int argc, char *argv[]) 
{
    int nthreads, tid;
    char hostname[256];

    /* Display the local hostname */
    gethostname(hostname, 256);
    printf("Running on host: %s\n", hostname);

    /* Fork a team of threads giving them their own copies of variables */
#pragma omp parallel private(nthreads, tid)
    {

        /* Obtain thread number */
        tid = omp_get_thread_num();
        printf("%s) Hello World from thread = %02d\n", hostname, tid);

        /* Only master thread does this */
        if (tid == 0) 
            {
                nthreads = omp_get_num_threads();
                printf("%s) Number of threads = %02d\n", hostname, nthreads);
            }

    }  /* All threads join master thread and disband */

    return 0;
}

