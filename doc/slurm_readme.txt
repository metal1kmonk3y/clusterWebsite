#
# Using SLURM on the Flux Cluster
#


###########################################
# Command Summary
###########################################
sinfo
  Show basic information about the nodes available in the system
  shell$ sinfo

squeue
  Show information about the job queue (e.g., which jobs are running, versus queued)
  shell$ squeue

sbatch
  Submit a batch job. Does not block in the shell, but queues the job for later execution.
  See notes below on the header needed in the script for allocation specification.
  shell$ sbatch mysript.sh

salloc
  Obtain a slurm allocation to use. Blocks until allocation is available.
  This is useful if you want to experiment with the allocation interactively.
  Most users will find this better/easier to use than srun for this purpose.
  # Allocate two nodes from the available pool of nodes
  shell$ salloc -N 2
  # The above may block until the resources are available. Once the command returns
  # then a prompt will be provided for you to interact with the allocation
  shell$ mpirun hostname | sort | uniq -c
      8 flux2.cs.uwlax.edu
      8 flux3.cs.uwlax.edu
  # when you are all done make sure to exit, which will release the allocation
  shell$ exit

srun
  Run a script interactively or allocate resources for interactive use
  # Allocate two nodes from the available pool of nodes
  shell$ srun -N 2
  # Allocate two nodes from the list of nodes provided, when available
  shell$ srun -N 2 --nodelist=flux2,flux3,flux4

scancel
  Kill a job by it's Job ID (use squeue to get Job ID)
  shell$ scancel 12345



###########################################
# Common Examples
###########################################

## Launch a script to run on a remote machine with all of the parameters supplied in the comments
  shell$ sbatch basic.sh

## Launch a script to run on a set of remote machines overriding the -N parameter inside
  shell$ sbatch -N 3 basic.sh


## Run a Command interactively on a node
  # First allocate the nodes for interactive use (here requesting two nodes)
  shell$ salloc -N 2

  # Then use srun to run a program on all of the nodes
  shell$ srun hostname

  # Make sure to release the allocation when finished
  shell$ exit


## Alternative way to allocate and run an interactive shell (salloc version above is preferred)
  shell$ srun -N 1 --pty $SHELL
