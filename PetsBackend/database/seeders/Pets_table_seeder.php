<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class pets_table_seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pets= array( 
            array('Scott', 'M', 1),
            array('Randy', 'M', 1),
            array('Milu', 'F', 2),
            array('Laika', 'F', 2),
            array('Frodo', 'M', 3),
            array('Brenda', 'F', 3),
            array('Kora', 'F', 4),
            array('Jerry', 'M', 4),
            array('Zuri', 'F', 5),
            array('Tom', 'M', 5),
        );
        for($i= 0; $i<=9; $i++)
        {
            DB::table('pets')->insert(array(
                'name'=> $pets[$i][0],
                'gender'=>$pets[$i][1],
                'id_type'=>$pets[$i][2],
                'created_at'=>date('Y-m-d H:i:s'),
                'updated_at'=> date('Y-m-d H:i:s')
            ));
        }
        $this->command->info('Datos creados de la tabla: Pets');
    }
}
