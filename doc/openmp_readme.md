#
# Using OpenMP Examples on the Flux Cluster
#

The examples are linked from the website, but also available in the following directory:
  /export/examples
The OpenMP examples are in the 'openmp' subdirectory:
  /export/examples/openmp

You can copy these files into your home directory and use them as a starting point.


###########################################
# Files
###########################################
Makefile
  Makefile to compile the OpenMP program.
  To compile the program use the following command (without the $shell):
  shell$ make

omp_hello.c
  Hello World OpenMP Program
  shell$ ./hello

mpi_omp_hello.c
  Hybrid OpenMP+MPI Program
  shell$ mpirun -np 2 -map-by node ./mpi_hello 

###########################################
# Running the examples
###########################################
#
# Run on your local machine (default OMP_NUM_THREADS)
#
shell$ ./hello  | sort
flux.cs.uwlax.edu) Hello World from thread = 00
flux.cs.uwlax.edu) Hello World from thread = 01
flux.cs.uwlax.edu) Hello World from thread = 02
flux.cs.uwlax.edu) Hello World from thread = 03
flux.cs.uwlax.edu) Hello World from thread = 04
flux.cs.uwlax.edu) Hello World from thread = 05
flux.cs.uwlax.edu) Hello World from thread = 06
flux.cs.uwlax.edu) Hello World from thread = 07
flux.cs.uwlax.edu) Hello World from thread = 08
flux.cs.uwlax.edu) Hello World from thread = 09
flux.cs.uwlax.edu) Hello World from thread = 10
flux.cs.uwlax.edu) Hello World from thread = 11
flux.cs.uwlax.edu) Hello World from thread = 12
flux.cs.uwlax.edu) Hello World from thread = 13
flux.cs.uwlax.edu) Hello World from thread = 14
flux.cs.uwlax.edu) Hello World from thread = 15
flux.cs.uwlax.edu) Hello World from thread = 16
flux.cs.uwlax.edu) Hello World from thread = 17
flux.cs.uwlax.edu) Hello World from thread = 18
flux.cs.uwlax.edu) Hello World from thread = 19
flux.cs.uwlax.edu) Hello World from thread = 20
flux.cs.uwlax.edu) Hello World from thread = 21
flux.cs.uwlax.edu) Hello World from thread = 22
flux.cs.uwlax.edu) Hello World from thread = 23
flux.cs.uwlax.edu) Number of threads = 24
Running on host: flux.cs.uwlax.edu

#
# Run on your local machine (temporarily override OMP_NUM_THREADS)
#
shell$  OMP_NUM_THREADS=4 ./hello | sort
flux.cs.uwlax.edu) Hello World from thread = 00
flux.cs.uwlax.edu) Hello World from thread = 01
flux.cs.uwlax.edu) Hello World from thread = 02
flux.cs.uwlax.edu) Hello World from thread = 03
flux.cs.uwlax.edu) Number of threads = 04
Running on host: flux.cs.uwlax.edu


#
# Run on your local machine (override OMP_NUM_THREADS for all runs from this shell)
#
shell$ export OMP_NUM_THREADS=4
shell$ ./hello | sort
flux.cs.uwlax.edu) Hello World from thread = 00
flux.cs.uwlax.edu) Hello World from thread = 01
flux.cs.uwlax.edu) Hello World from thread = 02
flux.cs.uwlax.edu) Hello World from thread = 03
flux.cs.uwlax.edu) Number of threads = 04
Running on host: flux.cs.uwlax.edu


#
# Run inside an allocation, one copy per node (not MPI)
#
#
# 1) Allocate two nodes
#
shell$ salloc -N 2 
#
# 2) Run the program, one copy per node
#
shell$ srun ./hello | sort
flux2.cs.uwlax.edu) Hello World from thread = 00
flux2.cs.uwlax.edu) Hello World from thread = 01
flux2.cs.uwlax.edu) Hello World from thread = 02
flux2.cs.uwlax.edu) Hello World from thread = 03
flux2.cs.uwlax.edu) Hello World from thread = 04
flux2.cs.uwlax.edu) Hello World from thread = 05
flux2.cs.uwlax.edu) Hello World from thread = 06
flux2.cs.uwlax.edu) Hello World from thread = 07
flux2.cs.uwlax.edu) Number of threads = 08
flux3.cs.uwlax.edu) Hello World from thread = 00
flux3.cs.uwlax.edu) Hello World from thread = 01
flux3.cs.uwlax.edu) Hello World from thread = 02
flux3.cs.uwlax.edu) Hello World from thread = 03
flux3.cs.uwlax.edu) Hello World from thread = 04
flux3.cs.uwlax.edu) Hello World from thread = 05
flux3.cs.uwlax.edu) Hello World from thread = 06
flux3.cs.uwlax.edu) Hello World from thread = 07
flux3.cs.uwlax.edu) Number of threads = 08
Running on host: flux2.cs.uwlax.edu
Running on host: flux3.cs.uwlax.edu
#
# 3) Exit the allocation
#
shell$ exit


#
# Run the hybrid OpenMP+MPI program
#
#
# 1) Allocate two nodes
#
shell$ salloc -N 2 
#
# 2) Run the program, one copy per node
#
shell$ mpirun -np 2 -map-by node ./mpi_hello | sort
flux2.cs.uwlax.edu) Hello World from thread = 00
flux2.cs.uwlax.edu) Number of threads = 01
flux3.cs.uwlax.edu) Hello World from thread = 00
flux3.cs.uwlax.edu) Number of threads = 01
Running on host: flux2.cs.uwlax.edu
Running on host: flux3.cs.uwlax.edu
#
# Specify the OMP_NUM_THREADS (temporarily)
#
shell$ OMP_NUM_THREADS=8 mpirun -np 2 -map-by node ./mpi_hello | sort
flux2.cs.uwlax.edu) Hello World from thread = 00
flux2.cs.uwlax.edu) Hello World from thread = 01
flux2.cs.uwlax.edu) Hello World from thread = 02
flux2.cs.uwlax.edu) Hello World from thread = 03
flux2.cs.uwlax.edu) Hello World from thread = 04
flux2.cs.uwlax.edu) Hello World from thread = 05
flux2.cs.uwlax.edu) Hello World from thread = 06
flux2.cs.uwlax.edu) Hello World from thread = 07
flux2.cs.uwlax.edu) Number of threads = 08
flux3.cs.uwlax.edu) Hello World from thread = 00
flux3.cs.uwlax.edu) Hello World from thread = 01
flux3.cs.uwlax.edu) Hello World from thread = 02
flux3.cs.uwlax.edu) Hello World from thread = 03
flux3.cs.uwlax.edu) Hello World from thread = 04
flux3.cs.uwlax.edu) Hello World from thread = 05
flux3.cs.uwlax.edu) Hello World from thread = 06
flux3.cs.uwlax.edu) Hello World from thread = 07
flux3.cs.uwlax.edu) Number of threads = 08
Running on host: flux2.cs.uwlax.edu
Running on host: flux3.cs.uwlax.edu


#
# 3) Exit the allocation
#
shell$ exit
