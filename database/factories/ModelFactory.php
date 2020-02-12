<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/
function randDate()
{
    return \Carbon\Carbon::now()
        ->subDays(rand(1, 100))
        ->subHours(rand(1, 23))
        ->subMinutes(rand(1, 60));
}


$factory->define(App\Models\User::class, function (Faker $faker) {
    static $createdAt;
    static $password;

    return [
        'username' => $faker->name,
        'email' => $faker->safeEmail,
        'rid' => 10,
        'password' => $password ?: $password = app('hash')->make(123456),
        'created_at' => $createdAt ?: $createAt = randDate(),
        'updated_at' => $createdAt ?: $createdAt = randDate(),
    ];
});
