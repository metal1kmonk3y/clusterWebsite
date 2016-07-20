# Architecture
[](Describe the architecture details of the machine.)
Flux is a five (5) node cluster with one head node, one large memory node, and three compute nodes.  The three compute nodes are managed by a SLURM scheduler.  Each compute node contains x processor cores, y sockets, and z RAM as can be seen in the hwloc diagrams.

### Node diagrams:
#### flux (head node)
![flux](../img/flux.png)
#### flux1 (large memory machine)
![flux1](../img/flux1.png)
#### flux2, flux3, flux4 (compute node)
![flux2](../img/flux2.png)
![flux3](../img/flux3.png)
![flux4](../img/flux4.png)