<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call(ClansTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(FriendsTableSeeder::class);
        $this->call(ClanUserTableSeeder::class);

        Model::reguard();
    }
}
