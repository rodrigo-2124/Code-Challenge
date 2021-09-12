<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class types_table_seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types= ['Dog', 'Cat', 'Turtle', 'Snake', 'Rabbit'];
        for($i= 0; $i<=4; $i++)
        {
            DB::table('types')->insert(array(
                'name'=> $types[$i],
                'created_at'=>date('Y-m-d H:i:s'),
                'updated_at'=> date('Y-m-d H:i:s')
            ));
        }
        $this->command->info('Datos creados de la tabla: Types');
    }
}
