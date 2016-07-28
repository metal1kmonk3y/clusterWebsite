#!/bin/bash

#SBATCH -N 2             # Give me 2 whole nodes worth of cores
#SBATCH -t 0-00:05       # Runtime in D-HH:MM
#SBATCH -o mpi-examples.out  # File to which STDOUT and STDERR will be written

date

#echo
#echo "-------------------------"
#echo "All SLURM Environment Variables"
#echo "-------------------------"
#printenv | grep SLURM

echo
echo "-------------------------"
echo "Make the programs"
echo "-------------------------"
make

echo
echo "-------------------------"
echo "Run Hello World (on all cores)"
echo "-------------------------"
mpirun hello

echo
echo "-------------------------"
echo "Run Hello World (on a couple cores)"
echo "-------------------------"
mpirun -np 2 hello

echo
echo "-------------------------"
echo "Run Hello World (on a few cores, different machines)"
echo "-------------------------"
mpirun -np 6 --map-by node hello

echo
echo "-------------------------"
echo "Run Ring Program (on all cores)"
echo "-------------------------"
mpirun ring

echo
echo "-------------------------"
echo "All done"
echo "-------------------------"
date


# Wait for any background jobs
wait

exit 0
