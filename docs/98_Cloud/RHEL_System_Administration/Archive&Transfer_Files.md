# Archiving and transferring files

## Archive using `tar`

Stand for tape archive, used to create Archive and extracts the archive files.
one fo the most important command which provides archiving functionality in Linux.

## `tar` operations

| Options                    | Descriptions                                                                                                |
| :------------------------- | :---------------------------------------------------------------------------------------------------------- |
| -c / --create              | Creat a new archive                                                                                         |
| -x / --extract             | Extract from an existing archive                                                                            |
| -t / --list                | List the tableof contents of an archive                                                                     |
|                            |                                                                                                             |
| -v / --verbose             | Verbose. Shows which files get archived or extracted                                                        |
| -f / --file=               | File name. This option must be followed by the file name of the archive to use or create                    |
| -p / --preserve-permission | preserve the permissions of files and directories when extracting an archive. without subtracting the umask |

## `tar` compressions options

| Options      | Descriptions                                                            |
| :----------- | :---------------------------------------------------------------------- |
| -z / --gzip  | gzip (.tar.gz)                                                          |
| -j / --bzip2 | bzip2 (.tar.bz2) typically achives a better compression ratio than gzip |
| -J / --xz    | xz (.tar.xz) typically achives a better compression ratio than bzip2    |
