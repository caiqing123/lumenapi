# Lumen PHP Framework
api 文档生成

apidoc官方文档：http://apidocjs.com/#params

安装 npm install apidoc -g

生成 apidoc -i App/Http/Controllers/Api/V1/ -o public/apidoc/


测试数据生成

php artisan db:seed (默认添加了10个用户数据)

### laravel-swoole 
php版本要求7.2+  
php添加 swool扩展  
php artisan swoole:http start //开启http服务  
php artisan swoole:http stop  //停止  
php artisan swoole:http restart  //重新启动  
php artisan swoole:http reload  //重新加载，每次改完代码都需运行此命令  
php artisan swoole:http infos  //运行信息  

### nginx 配置
server {
    listen 80;
    server_name *****.com;
    root  ************/public;
    index index.php;

    location = /index.php {
        # Ensure that there is no such file named "not_exists"
        # in your "public" directory.
        try_files /not_exists @swoole;
    }
    # any php files must not be accessed
    #location ~* \.php$ {
    #    return 404;
    #}
    location / {
        try_files $uri $uri/ @swoole;
    }

    location @swoole {
        set $suffix "";

        if ($uri = /index.php) {
            set $suffix ?$query_string;
        }

        proxy_set_header Host $http_host;
        proxy_set_header Scheme $scheme;
        proxy_set_header SERVER_PORT $server_port;
        proxy_set_header REMOTE_ADDR $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;

        # IF https
        # proxy_set_header HTTPS "on";

        proxy_pass http://127.0.0.1:1215$suffix;
    }
}