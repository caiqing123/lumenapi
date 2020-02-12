<?php

namespace App\Providers;

use Illuminate\Database\Events\QueryExecuted;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // register mail
        $this->app->singleton('mailer', function ($app) {
            $app->configure('services');
            $app->configure('mail');

            return $app->loadComponent('mail', 'Illuminate\Mail\MailServiceProvider', 'mailer');
        });

        // dingo findOrFail
        app('api.exception')->register(function (\Illuminate\Database\Eloquent\ModelNotFoundException $exception) {
            abort(404);
        });


    }

    /**
     * 启动应用服务
     *
     * @return void
     */
    public function boot()
    {
        // sql log
        if (app()->environment('local')) {
            DB::listen(function (QueryExecuted $query) {
                $sqlWithPlaceholders = str_replace(['%', '?'], ['%%', '%s'], $query->sql);
                $bindings = $query->connection->prepareBindings($query->bindings);
                $pdo = $query->connection->getPdo();
                Log::info(vsprintf($sqlWithPlaceholders, array_map([$pdo, 'quote'], $bindings)));
            });
        }
    }
}
