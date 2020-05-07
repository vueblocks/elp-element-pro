#!/usr/bin/env bash

has_ngx=`ps aux | grep nginx | grep -v grep`

if [[ "$has_ngx" != "" ]]
then
    sudo /export/servers/nginx/sbin/nginx -s stop
fi
