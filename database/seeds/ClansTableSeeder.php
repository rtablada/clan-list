<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

use App\Clan;

class ClansTableSeeder extends Seeder
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

        for ($i=0; $i < 20; $i++) {
            $clan = Clan::create([
                'name' => $faker->city,
                'tag' => $faker->regexify('[A-Z]{2,4}'),
            ]);
        }
    }
}
