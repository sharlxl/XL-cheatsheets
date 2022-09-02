# ACLs

## Access Control List Concepts

Standard Linux file permissions are adequate when files are used by only a single owner, and a single designated group of people.  
However, some use cases require that files are accessed with different file permission sets by multiple named users and groups.  
Access Control Lists (ACLs) provide this function.

With ACLs, you can grant permissions to multiple users and groups, identified by user name, group name, UID, or GID, using the same permission flags used with regular file permissions: read, write, and execute.

## Controlling Access to files with ACLs

> From RHL 7 acl option is enabled by dafault.

to view the ACLs
`getfacl [file name]`

> -rwxrw----+ 1 shar superuser 124 Apr 22 13:36 test.txt

to set the ACLs  
`setfacl -m u:neko:rw test2.txt`

- u => User
- neko => Username
- rw => permissions

`setfacl -m mask:r test2.txt`

After changing the mask value to “r” and permissions has been effective for group owner and neko user. user have reading and writing permissions on the file, by changing the mask, we have effectively limited their permissions to read only. As the output of the command shows, they now are only allowed to read the file.

Other than explicitly changed with the command above, the ACLs mask also gets automatically re-calculated when we assign or change permissions with setfacl (unless the -n option is specified).

Changing the permissions of the neko user to rwx and then check the getfacl output:

> ... mask: rwx ...

As you can see the mask got re-calculated and it now reflects the maximum permissions present for the named user neko. Obviously, since now no previously set permissions are higher than the mask, there is no need for showing the #effective permission status.

## Default ACLs

The default ACL is a specific type of permission assigned to a directory,  
that doesn’t change the permissions of the directory itself,  
but makes so that specified ACLs are set by default on all the files created inside of it.

The mask associated with an ACL limits the set of permissions that can be assigned on the file for the the named groups and users and for the group owner,  
but has no effect on the permissions for the file owner and the other permission group.
