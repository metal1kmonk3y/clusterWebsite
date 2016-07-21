# Architecture
[](Describe the architecture details of the machine.)
Flux is a five (5) node cluster with one head node, one large memory node, and three compute nodes.  The three compute nodes are managed by a SLURM scheduler.  Each compute node contains x processor cores, y sockets, and z RAM as can be seen in the hwloc diagrams.

<div class = code>
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

</div>



### Node diagrams:
#### flux (head node)
![flux](img/flux.png)
#### flux1 (large memory machine)
![flux1](img/flux1.png)
#### flux2, flux3, flux4 (compute node)
![flux2](img/flux2.png)
![flux3](img/flux3.png)
![flux4](img/flux4.png)


# Account Information
[](This is where you describe who to contact for an account.)
If you want an account on the machine, you need to contact Dr. Samantha Foley at <sfoley@uwlax.edu> to create you an account.  Be sure to mention if you need a web accessible directory or not.


### Accessing the cluster
[](This is where you describe how to access and authenticate with the cluster.)
You can access flux using via SSH to `flux.cs.uwlax.edu`. This cluster is accessible on or off campus without the VPN. Please use it responsibly.

### Quotas
[](this is where you describe what the limits are for disk and computational usage.)
At the moment, there are no disk or job quotas.

### Additional Support
[](List who should be contacted for support and sofware requests.)
Technical support and software requests should be sent to <sfoley@uwlax.edu>.

