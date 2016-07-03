#!/bin/bash

#SBATCH -N 2             # Ensure that all cores are on one machine
#SBATCH -t 0-00:05       # Runtime in D-HH:MM
#SBATCH -o hostname.out  # File to which STDOUT and STDERR will be written
#SBATCH --open-mode=append # Append to the output file if it exists

date

echo "-------------------------"

echo "Get the name of the first node in the allocation"
echo "Do so with binding"
echo "-------------------------"
hwloc-bind core:0 hostname > myfile.txt.$SLURM_JOB_ID &
hwloc-bind core:1 hostname >> myfile.txt.$SLURM_JOB_ID &

echo "Use srun to show the names of all the nodes in the allocation"
echo "-------------------------"
srun hostname 

echo "Now sleep for a bit of time on all of those machines"
echo "-------------------------"
srun sleep 5

echo "-------------------------"
date

exit 0
