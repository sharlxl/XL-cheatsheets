# Advanced Storage features

- Stratis
- VDO (Virtual Data Optimizer)

## VDO

Compressing and Deduplicating Storage with VDO

VDO short for Virtual Data Optimiser is a block virtualisation technology that provides inline deduplication and compression of data at a block device level

The idea of deduplication is quite simple: to remove copies of duplicate data and only remain with one copy. When an identical file is added on a block device, it is marked as a duplicate and the original file is referenced instead. In doing so, VDO helps saves the block volume space.

VDO includes 2 kernel modules: the `kvdo` module to transparently control data compression, and the `uds` module for deduplication.

VDO applies 3 phases to data in the following order to reduce the footprint on storgae devices:

- Zero-block Elimination
- Deduplication
- COmpression
