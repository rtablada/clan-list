<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

use App\User;

class ClanUserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        $faker->seed(1234);

        for ($i=1; $i <= 100; $i++) {
            $user = User::find($i);

            if($user) {
                $friends = [];

                for ($x = 0; $x < $faker->numberBetween(1, 3); $x++) {
                    $friends[] = $faker->biasedNumberBetween(1, 20);
                }

                $user->clans()->sync($friends);
            }
        }
    }
}
