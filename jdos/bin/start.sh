#! /bin/bash

export `grep ngx_conf /home/admin/container_env`
ngx_file_name=${ngx_conf-"agent"}
# 添加授信关系
mkdir -p /home/admin/.ssh/
echo 'ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAgEA5tuawOCaDveTK3jXZKB/19VTe9bWBzjAfz+scnnEvFZru1kngXnQGK2LIpxdEQIDGSgqNJPH5bK0arhpUDr1D0HmNCGDiVHQHJhe3F8MpSjw7dr1MfbyXIvCpU4BVSEq5Nn3MKfpF8E1f0kTh9K4/fpkgOADPBH6ksvb9Q9gDDJfbR8DH+Qb4Xo8ulN4xW6r0Z2TVGDt2y5yYVcgjzLXOyKGanl5dErKCsc2pDGd1pd43O2Zpnk48KBORQeVaQdXptNpdQqnmerTINu3wnk10v5jSvamEYAmwAcbNdEPShILAr34uxh67+e/49aVWhsRmJWe3wZbxkpCtiNzEEz7XvhtVvz4bchGnRIGYyo9jrFSQxsFqZCe0G7VG05bOG7rtnm+N8qu4AtdwZpRahqLIYPDi1J0RBMDTHtNM/yhx3ZnmkCWd9JzUDpsug1/m89XsKKaCfZCgi4vBKiunFkw55dFC5micu696UcWyQ+B4loODwgwX+4qdXuVBNgqG75goP28bjumng5Gu73XkWFVI3DGz58roSkGKWX6DeTt1pmhGheId0OhAYKalbMnNugWiLyd8QrUQIUD5KA7BDyCglk01GDThRxN1XNZzK/zBmkhZq3QX4QxqRm8oPmUZmjxxWlfz5x2z8uAy4GLrLg/OVJG13kZFK5cIIVBbXI4zA0= wangyinsheng@jd.com' > /home/admin/.ssh/authorized_keys
chmod 700 /home/admin/.ssh/
chmod 600 /home/admin/.ssh/authorized_keys


mkdir -p /dev/shm/nginx_temp/client_body

\cp ../nginx/${ngx_file_name} /export/servers/nginx/conf/domains/agent
\cp ../nginx/nginx.conf /export/servers/nginx/conf/nginx.conf

sudo /export/servers/nginx/sbin/nginx -c /export/servers/nginx/conf/nginx.conf
