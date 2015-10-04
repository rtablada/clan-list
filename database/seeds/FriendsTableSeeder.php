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
                $user->friends()->sync([$faker->biasedNumberBetween($i, 100)]);
            }
        }
    }
}
