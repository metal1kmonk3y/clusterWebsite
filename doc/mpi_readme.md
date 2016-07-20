#
# Using MPI Examples on the Flux Cluster
#

The examples are linked from the website, but also available in the following directory:
  /export/examples
The MPI examples are in the 'mpi' subdirectory:
  /export/examples/mpi

You can copy these files into your home directory and use them as a starting point.


###########################################
# Files
###########################################
Makefile
  Makefile to compile the MPI programs.
  To compile the program use the following command (without the $shell):
  shell$ make

hello.c
  Hello World MPI Program
  shell$ mpirun hello

ring.c
  Ring Token Passing MPI Program
  shell$ mpirun ring

submit-run.sh
  An example batch script to submit the two MPI example programs and run them on 
  two machines in the cluster.
  ## Launch a script to run on a remote machine with all of the parameters supplied in the comments
  shell$ sbatch submit-run.sh
  ## Look for the file 'mpi-examples.out' in your current working directory when the job is finished.
