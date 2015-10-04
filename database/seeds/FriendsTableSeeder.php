<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

use App\User;

class FriendsTableSeeder extends Seeder
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

        for ($i=0; $i < 50; $i++) {
            $user = User::find($i);

            if($user) {
                $friends = [];

                for ($x = 0; $x < $faker->numberBetween(0, 10); $x++) {
                    $friends[] = $faker->biasedNumberBetween($i, 100);
                }

                $user->friendsOut()->sync($friends);
            }
        }
    }
}
