
import { Background, Position } from "reactflow";

export const istoricPasi = [

    //Pasul 0 cand apare doar nodul de start
    {
        noduri: [
        {
            id: 'Start',
            position: {x:400 , y:100},
            data: {label: 'Arad', g: 0},
            style: { background: '#FFF3B0'}
        }
        ], 
        muchii: []
    },
    {
    //Pasul 1
        noduri: [
            {
                id: 'Start',
                position: {x:400 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu',
                position: {x:200 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#BFADE0'}
            },
            {
                id: 'Timisoara',
                position: {x:400 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#BFADE0'}
            },
            {
                id: 'Zerind',
                position: {x:600 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#BFADE0'}
            }
        ],
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind',
                label: '140',
                type: 'straight'
            }
        ]
    },   

    //Pasul 2
    {
        noduri:
        [
            {
                id: 'Start',
                position: {x:400 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:200 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#BFADE0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:400 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#BFADE0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:600 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:500 , y:300},
                data: {label: 'Arad', g: 146},
                style: { background: '#BFADE0'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:700 , y:300},
                data: {label: 'Oradea', g: 150},
                style: { background: '#BFADE0'}
            }
        ],
        muchii: [
             {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '146',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '150',
                type: 'straight'
            }
        ]
    },

    //Pasul 3
    {
        noduri: [

             {
                id: 'Start',
                position: {x:400 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:200 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#BFADE0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:400 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:600 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:570 , y:300},
                data: {label: 'Arad', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:700 , y:300},
                data: {label: 'Oradea', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:330 , y:300},
                data: {label: 'Arad', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:450 , y:300},
                data: {label: 'Lugoj', g: 118},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            }
        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            }
        ]
    },

    //Pasul 4
    {
         noduri: [

             {
                id: 'Start',
                position: {x:600 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:600 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:900 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:890 , y:300},
                data: {label: 'Arad', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1000 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:650 , y:300},
                data: {label: 'Arad', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            }
        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            }
        ]
    },

    //Pasul 5
    {
         noduri: [

             {
                id: 'Start',
                position: {x:600 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:600 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:900 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:890 , y:300},
                data: {label: 'Arad', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1000 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:650 , y:300},
                data: {label: 'Arad', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Sibiu_copil_oradea',
                position: {x:980 , y:400},
                data: {label: 'Sibiu', g: 297},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Zerind_copil_oradea',
                position: {x:1100 , y:400},
                data: {label: 'Zerind', g: 217},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            }
        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            },
            {
                id: 'oradea-sibiu',
                source: 'Oradea_copil_zerind',
                target: 'Sibiu_copil_oradea',
                label: '297',
                type: 'straight'
            },
            {
                id: 'oradea-zerind',
                source: 'Oradea_copil_zerind',
                target: 'Zerind_copil_oradea',
                label: '217',
                type: 'straight'
            }
        ]
    },

    //Pasul 6
     {
         noduri: [

             {
                id: 'Start',
                position: {x:600 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:600 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:900 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:890 , y:300},
                data: {label: 'Arad(vizitat)', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1000 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:650 , y:300},
                data: {label: 'Arad', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Sibiu_copil_oradea',
                position: {x:980 , y:400},
                data: {label: 'Sibiu', g: 297},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Zerind_copil_oradea',
                position: {x:1100 , y:400},
                data: {label: 'Zerind', g: 217},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            }
        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            },
            {
                id: 'oradea-sibiu',
                source: 'Oradea_copil_zerind',
                target: 'Sibiu_copil_oradea',
                label: '297',
                type: 'straight'
            },
            {
                id: 'oradea-zerind',
                source: 'Oradea_copil_zerind',
                target: 'Zerind_copil_oradea',
                label: '217',
                type: 'straight'
            }
        ]
    },

    //Pasul 7
    {
         noduri: [

             {
                id: 'Start',
                position: {x:600 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:600 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:900 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:890 , y:300},
                data: {label: 'Arad(vizitat)', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1000 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:650 , y:300},
                data: {label: 'Arad', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Sibiu_copil_oradea',
                position: {x:980 , y:400},
                data: {label: 'Sibiu', g: 297},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Zerind_copil_oradea',
                position: {x:1100 , y:400},
                data: {label: 'Zerind (vizitat)', g: 217},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            }
        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            },
            {
                id: 'oradea-sibiu',
                source: 'Oradea_copil_zerind',
                target: 'Sibiu_copil_oradea',
                label: '297',
                type: 'straight'
            },
            {
                id: 'oradea-zerind',
                source: 'Oradea_copil_zerind',
                target: 'Zerind_copil_oradea',
                label: '217',
                type: 'straight'
            }
        ]
    },

    //Pasul 8

    {
         noduri: [

             {
                id: 'Start',
                position: {x:600 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:600 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:900 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:890 , y:300},
                data: {label: 'Arad(vizitat)', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1000 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:650 , y:300},
                data: {label: 'Arad', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_oradea',
                position: {x:980 , y:400},
                data: {label: 'Sibiu', g: 297},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Zerind_copil_oradea',
                position: {x:1100 , y:400},
                data: {label: 'Zerind (vizitat)', g: 217},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Craiova_copil_ramnicu_valcea',
                position: {x:400 , y:400},
                data: {label: 'Craiova', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Pitesti_copil_ramnicu_valcea',
                position: {x:510 , y:400},
                data: {label: 'Pitesti', g: 317},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Sibiu_copil_ramnicu_valcea',
                position: {x:620 , y:400},
                data: {label: 'Sibiu', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            }
        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            },
            {
                id: 'oradea-sibiu',
                source: 'Oradea_copil_zerind',
                target: 'Sibiu_copil_oradea',
                label: '297',
                type: 'straight'
            },
            {
                id: 'oradea-zerind',
                source: 'Oradea_copil_zerind',
                target: 'Zerind_copil_oradea',
                label: '217',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Craiova_copil_ramnicu_valcea',
                label: '366',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-pitesti',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Pitesti_copil_ramnicu_valcea',
                label: '317',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-sibiu',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Sibiu_copil_ramnicu_valcea',
                label: '300',
                type: 'straight'
            }
        ]
    },

    //Pasul 9
    
    {
         noduri: [

             {
                id: 'Start',
                position: {x:800 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:800 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:1200 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:1180 , y:300},
                data: {label: 'Arad(vizitat)', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1300 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Arad', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:890 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_oradea',
                position: {x:1400 , y:400},
                data: {label: 'Sibiu', g: 297},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Zerind_copil_oradea',
                position: {x:1250 , y:400},
                data: {label: 'Zerind (vizitat)', g: 217},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Craiova_copil_ramnicu_valcea',
                position: {x:400 , y:400},
                data: {label: 'Craiova', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Pitesti_copil_ramnicu_valcea',
                position: {x:510 , y:400},
                data: {label: 'Pitesti', g: 317},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Sibiu_copil_ramnicu_valcea',
                position: {x:620 , y:400},
                data: {label: 'Sibiu', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Mehadia_copil_lugoj',
                position: {x:850 , y:400},
                data: {label: 'Mehadia', g: 299},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Timisoara_copil_lugoj',
                position: {x:990 , y:400},
                data: {label: 'Timisoara', g: 340},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            }
        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            },
            {
                id: 'oradea-sibiu',
                source: 'Oradea_copil_zerind',
                target: 'Sibiu_copil_oradea',
                label: '297',
                type: 'straight'
            },
            {
                id: 'oradea-zerind',
                source: 'Oradea_copil_zerind',
                target: 'Zerind_copil_oradea',
                label: '217',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Craiova_copil_ramnicu_valcea',
                label: '366',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-pitesti',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Pitesti_copil_ramnicu_valcea',
                label: '317',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-sibiu',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Sibiu_copil_ramnicu_valcea',
                label: '300',
                type: 'straight'
            },
            {
                id: 'lugoj-mehadia',
                source: 'Lugoj_copil_timisoara',
                target: 'Mehadia_copil_lugoj',
                label: '299',
                type: 'straight'
            },
             {
                id: 'lugoj-timisoara',
                source: 'Lugoj_copil_timisoara',
                target: 'Timisoara_copil_lugoj',
                label: '340',
                type: 'straight'
            }
        ]
    },

    //Pasul 10
      
    {
         noduri: [

             {
                id: 'Start',
                position: {x:800 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:800 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:1200 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:1180 , y:300},
                data: {label: 'Arad(vizitat)', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1300 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Arad', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:890 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_oradea',
                position: {x:1400 , y:400},
                data: {label: 'Sibiu', g: 297},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Zerind_copil_oradea',
                position: {x:1250 , y:400},
                data: {label: 'Zerind (vizitat)', g: 217},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Craiova_copil_ramnicu_valcea',
                position: {x:400 , y:400},
                data: {label: 'Craiova', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Pitesti_copil_ramnicu_valcea',
                position: {x:510 , y:400},
                data: {label: 'Pitesti', g: 317},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Sibiu_copil_ramnicu_valcea',
                position: {x:620 , y:400},
                data: {label: 'Sibiu', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Mehadia_copil_lugoj',
                position: {x:850 , y:400},
                data: {label: 'Mehadia', g: 299},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Timisoara_copil_lugoj',
                position: {x:990 , y:400},
                data: {label: 'Timisoara', g: 340},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            }
        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            },
            {
                id: 'oradea-sibiu',
                source: 'Oradea_copil_zerind',
                target: 'Sibiu_copil_oradea',
                label: '297',
                type: 'straight'
            },
            {
                id: 'oradea-zerind',
                source: 'Oradea_copil_zerind',
                target: 'Zerind_copil_oradea',
                label: '217',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Craiova_copil_ramnicu_valcea',
                label: '366',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-pitesti',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Pitesti_copil_ramnicu_valcea',
                label: '317',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-sibiu',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Sibiu_copil_ramnicu_valcea',
                label: '300',
                type: 'straight'
            },
            {
                id: 'lugoj-mehadia',
                source: 'Lugoj_copil_timisoara',
                target: 'Mehadia_copil_lugoj',
                label: '299',
                type: 'straight'
            },
             {
                id: 'lugoj-timisoara',
                source: 'Lugoj_copil_timisoara',
                target: 'Timisoara_copil_lugoj',
                label: '340',
                type: 'straight'
            }
        ]
    },

    //Pasul 11

      {
         noduri: [

             {
                id: 'Start',
                position: {x:800 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:800 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:1200 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:1180 , y:300},
                data: {label: 'Arad(vizitat)', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1300 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Arad(vizitat)', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:890 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_oradea',
                position: {x:1400 , y:400},
                data: {label: 'Sibiu', g: 297},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Zerind_copil_oradea',
                position: {x:1250 , y:400},
                data: {label: 'Zerind (vizitat)', g: 217},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Craiova_copil_ramnicu_valcea',
                position: {x:400 , y:400},
                data: {label: 'Craiova', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Pitesti_copil_ramnicu_valcea',
                position: {x:510 , y:400},
                data: {label: 'Pitesti', g: 317},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Sibiu_copil_ramnicu_valcea',
                position: {x:620 , y:400},
                data: {label: 'Sibiu', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Mehadia_copil_lugoj',
                position: {x:850 , y:400},
                data: {label: 'Mehadia', g: 299},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Timisoara_copil_lugoj',
                position: {x:990 , y:400},
                data: {label: 'Timisoara', g: 340},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            }
        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            },
            {
                id: 'oradea-sibiu',
                source: 'Oradea_copil_zerind',
                target: 'Sibiu_copil_oradea',
                label: '297',
                type: 'straight'
            },
            {
                id: 'oradea-zerind',
                source: 'Oradea_copil_zerind',
                target: 'Zerind_copil_oradea',
                label: '217',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Craiova_copil_ramnicu_valcea',
                label: '366',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-pitesti',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Pitesti_copil_ramnicu_valcea',
                label: '317',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-sibiu',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Sibiu_copil_ramnicu_valcea',
                label: '300',
                type: 'straight'
            },
            {
                id: 'lugoj-mehadia',
                source: 'Lugoj_copil_timisoara',
                target: 'Mehadia_copil_lugoj',
                label: '299',
                type: 'straight'
            },
             {
                id: 'lugoj-timisoara',
                source: 'Lugoj_copil_timisoara',
                target: 'Timisoara_copil_lugoj',
                label: '340',
                type: 'straight'
            }
        ]
    },

    //Pasul 12

      {
         noduri: [

             {
                id: 'Start',
                position: {x:800 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:800 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:1200 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:1180 , y:300},
                data: {label: 'Arad(vizitat)', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1300 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Arad(vizitat)', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:890 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_oradea',
                position: {x:1400 , y:400},
                data: {label: 'Sibiu', g: 297},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Zerind_copil_oradea',
                position: {x:1250 , y:400},
                data: {label: 'Zerind (vizitat)', g: 217},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Craiova_copil_ramnicu_valcea',
                position: {x:400 , y:400},
                data: {label: 'Craiova', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Pitesti_copil_ramnicu_valcea',
                position: {x:510 , y:400},
                data: {label: 'Pitesti', g: 317},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Sibiu_copil_ramnicu_valcea',
                position: {x:620 , y:400},
                data: {label: 'Sibiu', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Mehadia_copil_lugoj',
                position: {x:850 , y:400},
                data: {label: 'Mehadia', g: 299},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Timisoara_copil_lugoj',
                position: {x:990 , y:400},
                data: {label: 'Timisoara', g: 340},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Bucuresti_copil_fagaras',
                position: {x: 180, y:400},
                data: {label: 'Bucuresti', g: 450},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Sibiu_copil_fagaras',
                position: {x:290 , y:400},
                data: {label: 'Sibiu', g: 338},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            }

        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            },
            {
                id: 'oradea-sibiu',
                source: 'Oradea_copil_zerind',
                target: 'Sibiu_copil_oradea',
                label: '297',
                type: 'straight'
            },
            {
                id: 'oradea-zerind',
                source: 'Oradea_copil_zerind',
                target: 'Zerind_copil_oradea',
                label: '217',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Craiova_copil_ramnicu_valcea',
                label: '366',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-pitesti',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Pitesti_copil_ramnicu_valcea',
                label: '317',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-sibiu',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Sibiu_copil_ramnicu_valcea',
                label: '300',
                type: 'straight'
            },
            {
                id: 'lugoj-mehadia',
                source: 'Lugoj_copil_timisoara',
                target: 'Mehadia_copil_lugoj',
                label: '299',
                type: 'straight'
            },
             {
                id: 'lugoj-timisoara',
                source: 'Lugoj_copil_timisoara',
                target: 'Timisoara_copil_lugoj',
                label: '340',
                type: 'straight'
            },
            {
                id: 'fagaras-bucuresti',
                source: 'Fagaras_copil_sibiu',
                target: 'Bucuresti_copil_fagaras',
                label: '450',
                type: 'straight'
            },
            {
                id: 'fagaras-sibiu',
                source: 'Fagaras_copil_sibiu',
                target: 'Sibiu_copil_fagaras',
                label: '338',
                type: 'straight'
            }

        ]
    },

    //Pasul 13
    {
         noduri: [

             {
                id: 'Start',
                position: {x:800 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:800 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:1200 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:1180 , y:300},
                data: {label: 'Arad(vizitat)', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1300 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Arad(vizitat)', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:890 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad(vizitat)', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_oradea',
                position: {x:1400 , y:400},
                data: {label: 'Sibiu', g: 297},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Zerind_copil_oradea',
                position: {x:1250 , y:400},
                data: {label: 'Zerind (vizitat)', g: 217},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Craiova_copil_ramnicu_valcea',
                position: {x:400 , y:400},
                data: {label: 'Craiova', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Pitesti_copil_ramnicu_valcea',
                position: {x:510 , y:400},
                data: {label: 'Pitesti', g: 317},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Sibiu_copil_ramnicu_valcea',
                position: {x:620 , y:400},
                data: {label: 'Sibiu', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Mehadia_copil_lugoj',
                position: {x:850 , y:400},
                data: {label: 'Mehadia', g: 299},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Timisoara_copil_lugoj',
                position: {x:990 , y:400},
                data: {label: 'Timisoara', g: 340},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Bucuresti_copil_fagaras',
                position: {x: 180, y:400},
                data: {label: 'Bucuresti', g: 450},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Sibiu_copil_fagaras',
                position: {x:290 , y:400},
                data: {label: 'Sibiu', g: 338},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            }

        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            },
            {
                id: 'oradea-sibiu',
                source: 'Oradea_copil_zerind',
                target: 'Sibiu_copil_oradea',
                label: '297',
                type: 'straight'
            },
            {
                id: 'oradea-zerind',
                source: 'Oradea_copil_zerind',
                target: 'Zerind_copil_oradea',
                label: '217',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Craiova_copil_ramnicu_valcea',
                label: '366',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-pitesti',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Pitesti_copil_ramnicu_valcea',
                label: '317',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-sibiu',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Sibiu_copil_ramnicu_valcea',
                label: '300',
                type: 'straight'
            },
            {
                id: 'lugoj-mehadia',
                source: 'Lugoj_copil_timisoara',
                target: 'Mehadia_copil_lugoj',
                label: '299',
                type: 'straight'
            },
             {
                id: 'lugoj-timisoara',
                source: 'Lugoj_copil_timisoara',
                target: 'Timisoara_copil_lugoj',
                label: '340',
                type: 'straight'
            },
            {
                id: 'fagaras-bucuresti',
                source: 'Fagaras_copil_sibiu',
                target: 'Bucuresti_copil_fagaras',
                label: '450',
                type: 'straight'
            },
            {
                id: 'fagaras-sibiu',
                source: 'Fagaras_copil_sibiu',
                target: 'Sibiu_copil_fagaras',
                label: '338',
                type: 'straight'
            }

        ]
    },

    //Pasul 14

    {
         noduri: [

             {
                id: 'Start',
                position: {x:800 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:800 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:1200 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:1180 , y:300},
                data: {label: 'Arad(vizitat)', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1300 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Arad(vizitat)', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:890 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad(vizitat)', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea(vizitat)', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_oradea',
                position: {x:1400 , y:400},
                data: {label: 'Sibiu', g: 297},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Zerind_copil_oradea',
                position: {x:1250 , y:400},
                data: {label: 'Zerind (vizitat)', g: 217},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Craiova_copil_ramnicu_valcea',
                position: {x:400 , y:400},
                data: {label: 'Craiova', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Pitesti_copil_ramnicu_valcea',
                position: {x:510 , y:400},
                data: {label: 'Pitesti', g: 317},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Sibiu_copil_ramnicu_valcea',
                position: {x:620 , y:400},
                data: {label: 'Sibiu', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Mehadia_copil_lugoj',
                position: {x:850 , y:400},
                data: {label: 'Mehadia', g: 299},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Timisoara_copil_lugoj',
                position: {x:990 , y:400},
                data: {label: 'Timisoara', g: 340},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Bucuresti_copil_fagaras',
                position: {x: 180, y:400},
                data: {label: 'Bucuresti', g: 450},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Sibiu_copil_fagaras',
                position: {x:290 , y:400},
                data: {label: 'Sibiu', g: 338},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            }

        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            },
            {
                id: 'oradea-sibiu',
                source: 'Oradea_copil_zerind',
                target: 'Sibiu_copil_oradea',
                label: '297',
                type: 'straight'
            },
            {
                id: 'oradea-zerind',
                source: 'Oradea_copil_zerind',
                target: 'Zerind_copil_oradea',
                label: '217',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Craiova_copil_ramnicu_valcea',
                label: '366',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-pitesti',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Pitesti_copil_ramnicu_valcea',
                label: '317',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-sibiu',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Sibiu_copil_ramnicu_valcea',
                label: '300',
                type: 'straight'
            },
            {
                id: 'lugoj-mehadia',
                source: 'Lugoj_copil_timisoara',
                target: 'Mehadia_copil_lugoj',
                label: '299',
                type: 'straight'
            },
             {
                id: 'lugoj-timisoara',
                source: 'Lugoj_copil_timisoara',
                target: 'Timisoara_copil_lugoj',
                label: '340',
                type: 'straight'
            },
            {
                id: 'fagaras-bucuresti',
                source: 'Fagaras_copil_sibiu',
                target: 'Bucuresti_copil_fagaras',
                label: '450',
                type: 'straight'
            },
            {
                id: 'fagaras-sibiu',
                source: 'Fagaras_copil_sibiu',
                target: 'Sibiu_copil_fagaras',
                label: '338',
                type: 'straight'
            }

        ]
    },

    //Pasul 15

    {
         noduri: [

             {
                id: 'Start',
                position: {x:800 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:800 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:1200 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:1180 , y:300},
                data: {label: 'Arad(vizitat)', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1300 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Arad(vizitat)', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:890 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad(vizitat)', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea(vizitat)', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_oradea',
                position: {x:1400 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 297},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Zerind_copil_oradea',
                position: {x:1250 , y:400},
                data: {label: 'Zerind (vizitat)', g: 217},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Craiova_copil_ramnicu_valcea',
                position: {x:400 , y:400},
                data: {label: 'Craiova', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Pitesti_copil_ramnicu_valcea',
                position: {x:510 , y:400},
                data: {label: 'Pitesti', g: 317},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Sibiu_copil_ramnicu_valcea',
                position: {x:620 , y:400},
                data: {label: 'Sibiu', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Mehadia_copil_lugoj',
                position: {x:850 , y:400},
                data: {label: 'Mehadia', g: 299},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Timisoara_copil_lugoj',
                position: {x:990 , y:400},
                data: {label: 'Timisoara', g: 340},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Bucuresti_copil_fagaras',
                position: {x: 180, y:400},
                data: {label: 'Bucuresti', g: 450},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Sibiu_copil_fagaras',
                position: {x:290 , y:400},
                data: {label: 'Sibiu', g: 338},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            }

        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            },
            {
                id: 'oradea-sibiu',
                source: 'Oradea_copil_zerind',
                target: 'Sibiu_copil_oradea',
                label: '297',
                type: 'straight'
            },
            {
                id: 'oradea-zerind',
                source: 'Oradea_copil_zerind',
                target: 'Zerind_copil_oradea',
                label: '217',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Craiova_copil_ramnicu_valcea',
                label: '366',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-pitesti',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Pitesti_copil_ramnicu_valcea',
                label: '317',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-sibiu',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Sibiu_copil_ramnicu_valcea',
                label: '300',
                type: 'straight'
            },
            {
                id: 'lugoj-mehadia',
                source: 'Lugoj_copil_timisoara',
                target: 'Mehadia_copil_lugoj',
                label: '299',
                type: 'straight'
            },
             {
                id: 'lugoj-timisoara',
                source: 'Lugoj_copil_timisoara',
                target: 'Timisoara_copil_lugoj',
                label: '340',
                type: 'straight'
            },
            {
                id: 'fagaras-bucuresti',
                source: 'Fagaras_copil_sibiu',
                target: 'Bucuresti_copil_fagaras',
                label: '450',
                type: 'straight'
            },
            {
                id: 'fagaras-sibiu',
                source: 'Fagaras_copil_sibiu',
                target: 'Sibiu_copil_fagaras',
                label: '338',
                type: 'straight'
            }

        ]
    },

    //Pasul 16

    
    {
         noduri: [

             {
                id: 'Start',
                position: {x:800 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:800 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:1200 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:1180 , y:300},
                data: {label: 'Arad(vizitat)', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1300 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Arad(vizitat)', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:890 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad(vizitat)', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea(vizitat)', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_oradea',
                position: {x:1400 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 297},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Zerind_copil_oradea',
                position: {x:1250 , y:400},
                data: {label: 'Zerind (vizitat)', g: 217},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Craiova_copil_ramnicu_valcea',
                position: {x:400 , y:400},
                data: {label: 'Craiova', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Pitesti_copil_ramnicu_valcea',
                position: {x:510 , y:400},
                data: {label: 'Pitesti', g: 317},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Sibiu_copil_ramnicu_valcea',
                position: {x:620 , y:400},
                data: {label: 'Sibiu', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Mehadia_copil_lugoj',
                position: {x:850 , y:400},
                data: {label: 'Mehadia', g: 299},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Timisoara_copil_lugoj',
                position: {x:990 , y:400},
                data: {label: 'Timisoara', g: 340},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Bucuresti_copil_fagaras',
                position: {x: 180, y:400},
                data: {label: 'Bucuresti', g: 450},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Sibiu_copil_fagaras',
                position: {x:290 , y:400},
                data: {label: 'Sibiu', g: 338},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Drobeta_copil_mehadia',
                position: {x:810 , y:500},
                data: {label: 'Drobeta', g: 374},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Lugoj_copil_mehadia',
                position: {x:920 , y:500},
                data: {label: 'Lugoj', g: 369},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            }

        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            },
            {
                id: 'oradea-sibiu',
                source: 'Oradea_copil_zerind',
                target: 'Sibiu_copil_oradea',
                label: '297',
                type: 'straight'
            },
            {
                id: 'oradea-zerind',
                source: 'Oradea_copil_zerind',
                target: 'Zerind_copil_oradea',
                label: '217',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Craiova_copil_ramnicu_valcea',
                label: '366',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-pitesti',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Pitesti_copil_ramnicu_valcea',
                label: '317',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-sibiu',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Sibiu_copil_ramnicu_valcea',
                label: '300',
                type: 'straight'
            },
            {
                id: 'lugoj-mehadia',
                source: 'Lugoj_copil_timisoara',
                target: 'Mehadia_copil_lugoj',
                label: '299',
                type: 'straight'
            },
             {
                id: 'lugoj-timisoara',
                source: 'Lugoj_copil_timisoara',
                target: 'Timisoara_copil_lugoj',
                label: '340',
                type: 'straight'
            },
            {
                id: 'fagaras-bucuresti',
                source: 'Fagaras_copil_sibiu',
                target: 'Bucuresti_copil_fagaras',
                label: '450',
                type: 'straight'
            },
            {
                id: 'fagaras-sibiu',
                source: 'Fagaras_copil_sibiu',
                target: 'Sibiu_copil_fagaras',
                label: '338',
                type: 'straight'
            },

            {
                id: 'mehadia-drobeta',
                source: 'Mehadia_copil_lugoj',
                target: 'Drobeta_copil_mehadia',
                label: '374',
                type: 'straight'
            },
            {
                id: 'mehadia-lugoj',
                source: 'Mehadia_copil_lugoj',
                target: 'Lugoj_copil_mehadia',
                label: '369',
                type: 'straight'
            }
        ]
    },

    //Pasul 17

    
    {
         noduri: [

             {
                id: 'Start',
                position: {x:800 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:800 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:1200 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:1180 , y:300},
                data: {label: 'Arad(vizitat)', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1300 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Arad(vizitat)', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:890 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad(vizitat)', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea(vizitat)', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_oradea',
                position: {x:1400 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 297},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Zerind_copil_oradea',
                position: {x:1250 , y:400},
                data: {label: 'Zerind (vizitat)', g: 217},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Craiova_copil_ramnicu_valcea',
                position: {x:400 , y:400},
                data: {label: 'Craiova', g: 366},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Pitesti_copil_ramnicu_valcea',
                position: {x:510 , y:400},
                data: {label: 'Pitesti', g: 317},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Sibiu_copil_ramnicu_valcea',
                position: {x:620 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Mehadia_copil_lugoj',
                position: {x:850 , y:400},
                data: {label: 'Mehadia', g: 299},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Timisoara_copil_lugoj',
                position: {x:990 , y:400},
                data: {label: 'Timisoara', g: 340},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Bucuresti_copil_fagaras',
                position: {x: 180, y:400},
                data: {label: 'Bucuresti', g: 450},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Sibiu_copil_fagaras',
                position: {x:290 , y:400},
                data: {label: 'Sibiu', g: 338},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Drobeta_copil_mehadia',
                position: {x:810 , y:500},
                data: {label: 'Drobeta', g: 374},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Lugoj_copil_mehadia',
                position: {x:920 , y:500},
                data: {label: 'Lugoj', g: 369},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            }

        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            },
            {
                id: 'oradea-sibiu',
                source: 'Oradea_copil_zerind',
                target: 'Sibiu_copil_oradea',
                label: '297',
                type: 'straight'
            },
            {
                id: 'oradea-zerind',
                source: 'Oradea_copil_zerind',
                target: 'Zerind_copil_oradea',
                label: '217',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Craiova_copil_ramnicu_valcea',
                label: '366',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-pitesti',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Pitesti_copil_ramnicu_valcea',
                label: '317',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-sibiu',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Sibiu_copil_ramnicu_valcea',
                label: '300',
                type: 'straight'
            },
            {
                id: 'lugoj-mehadia',
                source: 'Lugoj_copil_timisoara',
                target: 'Mehadia_copil_lugoj',
                label: '299',
                type: 'straight'
            },
             {
                id: 'lugoj-timisoara',
                source: 'Lugoj_copil_timisoara',
                target: 'Timisoara_copil_lugoj',
                label: '340',
                type: 'straight'
            },
            {
                id: 'fagaras-bucuresti',
                source: 'Fagaras_copil_sibiu',
                target: 'Bucuresti_copil_fagaras',
                label: '450',
                type: 'straight'
            },
            {
                id: 'fagaras-sibiu',
                source: 'Fagaras_copil_sibiu',
                target: 'Sibiu_copil_fagaras',
                label: '338',
                type: 'straight'
            },

            {
                id: 'mehadia-drobeta',
                source: 'Mehadia_copil_lugoj',
                target: 'Drobeta_copil_mehadia',
                label: '374',
                type: 'straight'
            },
            {
                id: 'mehadia-lugoj',
                source: 'Mehadia_copil_lugoj',
                target: 'Lugoj_copil_mehadia',
                label: '369',
                type: 'straight'
            }
        ]
    },

    //Pasul 18
     {
         noduri: [

             {
                id: 'Start',
                position: {x:800 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:800 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:1200 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:1180 , y:300},
                data: {label: 'Arad(vizitat)', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1300 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Arad(vizitat)', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:890 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad(vizitat)', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea(vizitat)', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_oradea',
                position: {x:1400 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 297},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Zerind_copil_oradea',
                position: {x:1250 , y:400},
                data: {label: 'Zerind (vizitat)', g: 217},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Craiova_copil_ramnicu_valcea',
                position: {x:400 , y:400},
                data: {label: 'Craiova', g: 366},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Pitesti_copil_ramnicu_valcea',
                position: {x:510 , y:400},
                data: {label: 'Pitesti', g: 317},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_ramnicu_valcea',
                position: {x:620 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Mehadia_copil_lugoj',
                position: {x:850 , y:400},
                data: {label: 'Mehadia', g: 299},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Timisoara_copil_lugoj',
                position: {x:990 , y:400},
                data: {label: 'Timisoara', g: 340},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Bucuresti_copil_fagaras',
                position: {x: 180, y:400},
                data: {label: 'Bucuresti', g: 450},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Sibiu_copil_fagaras',
                position: {x:290 , y:400},
                data: {label: 'Sibiu', g: 338},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Drobeta_copil_mehadia',
                position: {x:810 , y:500},
                data: {label: 'Drobeta', g: 374},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Lugoj_copil_mehadia',
                position: {x:920 , y:500},
                data: {label: 'Lugoj', g: 369},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Bucuresti_copil_pitesti',
                position: {x:500 , y:500},
                data: {label: 'Bucuresti', g: 418},
                style: {
                    width: 70,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
             {
                id: 'Craiova_copil_pitesti',
                position: {x:580 , y:500},
                data: {label: 'Craiova', g: 455},
                style: {
                    width: 70,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
             {
                id: 'Ramnicu_valcea_copil_pitesti',
                position: {x:660 , y:500},
                data: {label: 'Ramnicu Valcea', g: 414},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            }

        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            },
            {
                id: 'oradea-sibiu',
                source: 'Oradea_copil_zerind',
                target: 'Sibiu_copil_oradea',
                label: '297',
                type: 'straight'
            },
            {
                id: 'oradea-zerind',
                source: 'Oradea_copil_zerind',
                target: 'Zerind_copil_oradea',
                label: '217',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Craiova_copil_ramnicu_valcea',
                label: '366',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-pitesti',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Pitesti_copil_ramnicu_valcea',
                label: '317',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-sibiu',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Sibiu_copil_ramnicu_valcea',
                label: '300',
                type: 'straight'
            },
            {
                id: 'lugoj-mehadia',
                source: 'Lugoj_copil_timisoara',
                target: 'Mehadia_copil_lugoj',
                label: '299',
                type: 'straight'
            },
             {
                id: 'lugoj-timisoara',
                source: 'Lugoj_copil_timisoara',
                target: 'Timisoara_copil_lugoj',
                label: '340',
                type: 'straight'
            },
            {
                id: 'fagaras-bucuresti',
                source: 'Fagaras_copil_sibiu',
                target: 'Bucuresti_copil_fagaras',
                label: '450',
                type: 'straight'
            },
            {
                id: 'fagaras-sibiu',
                source: 'Fagaras_copil_sibiu',
                target: 'Sibiu_copil_fagaras',
                label: '338',
                type: 'straight'
            },

            {
                id: 'mehadia-drobeta',
                source: 'Mehadia_copil_lugoj',
                target: 'Drobeta_copil_mehadia',
                label: '374',
                type: 'straight'
            },
            {
                id: 'mehadia-lugoj',
                source: 'Mehadia_copil_lugoj',
                target: 'Lugoj_copil_mehadia',
                label: '369',
                type: 'straight'
            },
            {
                id: 'pitesti-bucuresti',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Bucuresti_copil_pitesti',
                label: '418',
                type: 'straight'
            },
            {
                id: 'pitesti-craiova',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Craiova_copil_pitesti',
                label: '455',
                type: 'straight'
            },
            {
                id: 'pitesti-ramnicu_valcea',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Ramnicu_valcea_copil_pitesti',
                label: '414',
                type: 'straight'
            }
        ]
    },

    //Pasul 

     {
         noduri: [

             {
                id: 'Start',
                position: {x:800 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:800 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:1200 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:1180 , y:300},
                data: {label: 'Arad(vizitat)', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1300 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Arad(vizitat)', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:890 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad(vizitat)', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea(vizitat)', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_oradea',
                position: {x:1400 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 297},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Zerind_copil_oradea',
                position: {x:1250 , y:400},
                data: {label: 'Zerind (vizitat)', g: 217},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Craiova_copil_ramnicu_valcea',
                position: {x:400 , y:400},
                data: {label: 'Craiova', g: 366},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Pitesti_copil_ramnicu_valcea',
                position: {x:510 , y:400},
                data: {label: 'Pitesti', g: 317},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_ramnicu_valcea',
                position: {x:620 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Mehadia_copil_lugoj',
                position: {x:850 , y:400},
                data: {label: 'Mehadia', g: 299},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Timisoara_copil_lugoj',
                position: {x:990 , y:400},
                data: {label: 'Timisoara', g: 340},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Bucuresti_copil_fagaras',
                position: {x: 180, y:400},
                data: {label: 'Bucuresti', g: 450},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Sibiu_copil_fagaras',
                position: {x:290 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 338},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Drobeta_copil_mehadia',
                position: {x:810 , y:500},
                data: {label: 'Drobeta', g: 374},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Lugoj_copil_mehadia',
                position: {x:920 , y:500},
                data: {label: 'Lugoj', g: 369},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Bucuresti_copil_pitesti',
                position: {x:500 , y:500},
                data: {label: 'Bucuresti', g: 418},
                style: {
                    width: 70,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
             {
                id: 'Craiova_copil_pitesti',
                position: {x:580 , y:500},
                data: {label: 'Craiova', g: 455},
                style: {
                    width: 70,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
             {
                id: 'Ramnicu_valcea_copil_pitesti',
                position: {x:660 , y:500},
                data: {label: 'Ramnicu Valcea', g: 414},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            }

        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            },
            {
                id: 'oradea-sibiu',
                source: 'Oradea_copil_zerind',
                target: 'Sibiu_copil_oradea',
                label: '297',
                type: 'straight'
            },
            {
                id: 'oradea-zerind',
                source: 'Oradea_copil_zerind',
                target: 'Zerind_copil_oradea',
                label: '217',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Craiova_copil_ramnicu_valcea',
                label: '366',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-pitesti',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Pitesti_copil_ramnicu_valcea',
                label: '317',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-sibiu',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Sibiu_copil_ramnicu_valcea',
                label: '300',
                type: 'straight'
            },
            {
                id: 'lugoj-mehadia',
                source: 'Lugoj_copil_timisoara',
                target: 'Mehadia_copil_lugoj',
                label: '299',
                type: 'straight'
            },
             {
                id: 'lugoj-timisoara',
                source: 'Lugoj_copil_timisoara',
                target: 'Timisoara_copil_lugoj',
                label: '340',
                type: 'straight'
            },
            {
                id: 'fagaras-bucuresti',
                source: 'Fagaras_copil_sibiu',
                target: 'Bucuresti_copil_fagaras',
                label: '450',
                type: 'straight'
            },
            {
                id: 'fagaras-sibiu',
                source: 'Fagaras_copil_sibiu',
                target: 'Sibiu_copil_fagaras',
                label: '338',
                type: 'straight'
            },

            {
                id: 'mehadia-drobeta',
                source: 'Mehadia_copil_lugoj',
                target: 'Drobeta_copil_mehadia',
                label: '374',
                type: 'straight'
            },
            {
                id: 'mehadia-lugoj',
                source: 'Mehadia_copil_lugoj',
                target: 'Lugoj_copil_mehadia',
                label: '369',
                type: 'straight'
            },
            {
                id: 'pitesti-bucuresti',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Bucuresti_copil_pitesti',
                label: '418',
                type: 'straight'
            },
            {
                id: 'pitesti-craiova',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Craiova_copil_pitesti',
                label: '455',
                type: 'straight'
            },
            {
                id: 'pitesti-ramnicu_valcea',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Ramnicu_valcea_copil_pitesti',
                label: '414',
                type: 'straight'
            }
        ]
    },

    //Pasul
    {
         noduri: [

             {
                id: 'Start',
                position: {x:800 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:800 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:1200 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:1180 , y:300},
                data: {label: 'Arad(vizitat)', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1300 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Arad(vizitat)', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:890 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad(vizitat)', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea(vizitat)', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_oradea',
                position: {x:1400 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 297},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Zerind_copil_oradea',
                position: {x:1250 , y:400},
                data: {label: 'Zerind (vizitat)', g: 217},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Craiova_copil_ramnicu_valcea',
                position: {x:400 , y:400},
                data: {label: 'Craiova', g: 366},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
            {
                id: 'Pitesti_copil_ramnicu_valcea',
                position: {x:510 , y:400},
                data: {label: 'Pitesti', g: 317},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_ramnicu_valcea',
                position: {x:620 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Mehadia_copil_lugoj',
                position: {x:850 , y:400},
                data: {label: 'Mehadia', g: 299},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Timisoara_copil_lugoj',
                position: {x:990 , y:400},
                data: {label: 'Timisoara(vizitat)', g: 340},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Bucuresti_copil_fagaras',
                position: {x: 180, y:400},
                data: {label: 'Bucuresti', g: 450},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Sibiu_copil_fagaras',
                position: {x:290 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 338},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Drobeta_copil_mehadia',
                position: {x:810 , y:500},
                data: {label: 'Drobeta', g: 374},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Lugoj_copil_mehadia',
                position: {x:920 , y:500},
                data: {label: 'Lugoj', g: 369},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Bucuresti_copil_pitesti',
                position: {x:500 , y:500},
                data: {label: 'Bucuresti', g: 418},
                style: {
                    width: 70,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
             {
                id: 'Craiova_copil_pitesti',
                position: {x:580 , y:500},
                data: {label: 'Craiova', g: 455},
                style: {
                    width: 70,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
             {
                id: 'Ramnicu_valcea_copil_pitesti',
                position: {x:660 , y:500},
                data: {label: 'Ramnicu Valcea', g: 414},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            }

        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            },
            {
                id: 'oradea-sibiu',
                source: 'Oradea_copil_zerind',
                target: 'Sibiu_copil_oradea',
                label: '297',
                type: 'straight'
            },
            {
                id: 'oradea-zerind',
                source: 'Oradea_copil_zerind',
                target: 'Zerind_copil_oradea',
                label: '217',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Craiova_copil_ramnicu_valcea',
                label: '366',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-pitesti',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Pitesti_copil_ramnicu_valcea',
                label: '317',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-sibiu',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Sibiu_copil_ramnicu_valcea',
                label: '300',
                type: 'straight'
            },
            {
                id: 'lugoj-mehadia',
                source: 'Lugoj_copil_timisoara',
                target: 'Mehadia_copil_lugoj',
                label: '299',
                type: 'straight'
            },
             {
                id: 'lugoj-timisoara',
                source: 'Lugoj_copil_timisoara',
                target: 'Timisoara_copil_lugoj',
                label: '340',
                type: 'straight'
            },
            {
                id: 'fagaras-bucuresti',
                source: 'Fagaras_copil_sibiu',
                target: 'Bucuresti_copil_fagaras',
                label: '450',
                type: 'straight'
            },
            {
                id: 'fagaras-sibiu',
                source: 'Fagaras_copil_sibiu',
                target: 'Sibiu_copil_fagaras',
                label: '338',
                type: 'straight'
            },

            {
                id: 'mehadia-drobeta',
                source: 'Mehadia_copil_lugoj',
                target: 'Drobeta_copil_mehadia',
                label: '374',
                type: 'straight'
            },
            {
                id: 'mehadia-lugoj',
                source: 'Mehadia_copil_lugoj',
                target: 'Lugoj_copil_mehadia',
                label: '369',
                type: 'straight'
            },
            {
                id: 'pitesti-bucuresti',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Bucuresti_copil_pitesti',
                label: '418',
                type: 'straight'
            },
            {
                id: 'pitesti-craiova',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Craiova_copil_pitesti',
                label: '455',
                type: 'straight'
            },
            {
                id: 'pitesti-ramnicu_valcea',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Ramnicu_valcea_copil_pitesti',
                label: '414',
                type: 'straight'
            }
        ]
    },

    //Pasul 
     {
         noduri: [

             {
                id: 'Start',
                position: {x:800 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:800 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:1200 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:1180 , y:300},
                data: {label: 'Arad(vizitat)', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1300 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Arad(vizitat)', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:890 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad(vizitat)', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea(vizitat)', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_oradea',
                position: {x:1400 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 297},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Zerind_copil_oradea',
                position: {x:1250 , y:400},
                data: {label: 'Zerind (vizitat)', g: 217},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Craiova_copil_ramnicu_valcea',
                position: {x:400 , y:400},
                data: {label: 'Craiova', g: 366},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Pitesti_copil_ramnicu_valcea',
                position: {x:510 , y:400},
                data: {label: 'Pitesti', g: 317},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_ramnicu_valcea',
                position: {x:620 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Mehadia_copil_lugoj',
                position: {x:850 , y:400},
                data: {label: 'Mehadia', g: 299},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Timisoara_copil_lugoj',
                position: {x:990 , y:400},
                data: {label: 'Timisoara(vizitat)', g: 340},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Bucuresti_copil_fagaras',
                position: {x: 180, y:400},
                data: {label: 'Bucuresti', g: 450},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Sibiu_copil_fagaras',
                position: {x:290 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 338},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Drobeta_copil_mehadia',
                position: {x:810 , y:500},
                data: {label: 'Drobeta', g: 374},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Lugoj_copil_mehadia',
                position: {x:920 , y:500},
                data: {label: 'Lugoj', g: 369},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Bucuresti_copil_pitesti',
                position: {x:500 , y:500},
                data: {label: 'Bucuresti', g: 418},
                style: {
                    width: 70,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
             {
                id: 'Craiova_copil_pitesti',
                position: {x:580 , y:500},
                data: {label: 'Craiova', g: 455},
                style: {
                    width: 70,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
             {
                id: 'Ramnicu_valcea_copil_pitesti',
                position: {x:660 , y:500},
                data: {label: 'Ramnicu Valcea', g: 414},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Drobeta_copil_craiova',
                position: {x:250 , y:500},
                data: {label: 'Drobeta', g: 486},
                style: {
                    width: 60,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Pitesti_copil_craiova',
                position: {x:330 , y:500},
                data: {label: 'Pitesti', g: 504},
                style: {
                    width: 50,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Ramnicu_valcea_copil_craiova',
                position: {x:390 , y:500},
                data: {label: 'Ramnicu Valcea', g: 512},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            }
        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            },
            {
                id: 'oradea-sibiu',
                source: 'Oradea_copil_zerind',
                target: 'Sibiu_copil_oradea',
                label: '297',
                type: 'straight'
            },
            {
                id: 'oradea-zerind',
                source: 'Oradea_copil_zerind',
                target: 'Zerind_copil_oradea',
                label: '217',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Craiova_copil_ramnicu_valcea',
                label: '366',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-pitesti',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Pitesti_copil_ramnicu_valcea',
                label: '317',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-sibiu',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Sibiu_copil_ramnicu_valcea',
                label: '300',
                type: 'straight'
            },
            {
                id: 'lugoj-mehadia',
                source: 'Lugoj_copil_timisoara',
                target: 'Mehadia_copil_lugoj',
                label: '299',
                type: 'straight'
            },
             {
                id: 'lugoj-timisoara',
                source: 'Lugoj_copil_timisoara',
                target: 'Timisoara_copil_lugoj',
                label: '340',
                type: 'straight'
            },
            {
                id: 'fagaras-bucuresti',
                source: 'Fagaras_copil_sibiu',
                target: 'Bucuresti_copil_fagaras',
                label: '450',
                type: 'straight'
            },
            {
                id: 'fagaras-sibiu',
                source: 'Fagaras_copil_sibiu',
                target: 'Sibiu_copil_fagaras',
                label: '338',
                type: 'straight'
            },

            {
                id: 'mehadia-drobeta',
                source: 'Mehadia_copil_lugoj',
                target: 'Drobeta_copil_mehadia',
                label: '374',
                type: 'straight'
            },
            {
                id: 'mehadia-lugoj',
                source: 'Mehadia_copil_lugoj',
                target: 'Lugoj_copil_mehadia',
                label: '369',
                type: 'straight'
            },
            {
                id: 'pitesti-bucuresti',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Bucuresti_copil_pitesti',
                label: '418',
                type: 'straight'
            },
            {
                id: 'pitesti-craiova',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Craiova_copil_pitesti',
                label: '455',
                type: 'straight'
            },
            {
                id: 'pitesti-ramnicu_valcea',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Ramnicu_valcea_copil_pitesti',
                label: '414',
                type: 'straight'
            },
            {
                id: 'drobeta-craiova',
                source: 'Craiova_copil_ramnicu_valcea',
                target: 'Drobeta_copil_craiova',
                label: '486',
                type: 'straight'
            },
            {
                id: 'pitesti-craiova',
                source: 'Craiova_copil_ramnicu_valcea',
                target: 'Pitesti_copil_craiova',
                label: '504',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Craiova_copil_ramnicu_valcea',
                target: 'Ramnicu_valcea_copil_craiova',
                label: '512',
                type: 'straight'
            }
        ]
    },

    //pasul
     {
         noduri: [

             {
                id: 'Start',
                position: {x:800 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:800 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:1200 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:1180 , y:300},
                data: {label: 'Arad(vizitat)', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1300 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Arad(vizitat)', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:890 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad(vizitat)', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea(vizitat)', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_oradea',
                position: {x:1400 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 297},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Zerind_copil_oradea',
                position: {x:1250 , y:400},
                data: {label: 'Zerind (vizitat)', g: 217},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Craiova_copil_ramnicu_valcea',
                position: {x:400 , y:400},
                data: {label: 'Craiova', g: 366},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Pitesti_copil_ramnicu_valcea',
                position: {x:510 , y:400},
                data: {label: 'Pitesti', g: 317},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_ramnicu_valcea',
                position: {x:620 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Mehadia_copil_lugoj',
                position: {x:850 , y:400},
                data: {label: 'Mehadia', g: 299},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Timisoara_copil_lugoj',
                position: {x:990 , y:400},
                data: {label: 'Timisoara(vizitat)', g: 340},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Bucuresti_copil_fagaras',
                position: {x: 180, y:400},
                data: {label: 'Bucuresti', g: 450},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Sibiu_copil_fagaras',
                position: {x:290 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 338},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Drobeta_copil_mehadia',
                position: {x:810 , y:500},
                data: {label: 'Drobeta', g: 374},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Lugoj_copil_mehadia',
                position: {x:920 , y:500},
                data: {label: 'Lugoj(vizitat)', g: 369},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    } 
            },
            {
                id: 'Bucuresti_copil_pitesti',
                position: {x:500 , y:500},
                data: {label: 'Bucuresti', g: 418},
                style: {
                    width: 70,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
             {
                id: 'Craiova_copil_pitesti',
                position: {x:580 , y:500},
                data: {label: 'Craiova', g: 455},
                style: {
                    width: 70,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
             {
                id: 'Ramnicu_valcea_copil_pitesti',
                position: {x:660 , y:500},
                data: {label: 'Ramnicu Valcea', g: 414},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Drobeta_copil_craiova',
                position: {x:250 , y:500},
                data: {label: 'Drobeta', g: 486},
                style: {
                    width: 60,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Pitesti_copil_craiova',
                position: {x:330 , y:500},
                data: {label: 'Pitesti', g: 504},
                style: {
                    width: 50,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Ramnicu_valcea_copil_craiova',
                position: {x:390 , y:500},
                data: {label: 'Ramnicu Valcea', g: 512},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            }
        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            },
            {
                id: 'oradea-sibiu',
                source: 'Oradea_copil_zerind',
                target: 'Sibiu_copil_oradea',
                label: '297',
                type: 'straight'
            },
            {
                id: 'oradea-zerind',
                source: 'Oradea_copil_zerind',
                target: 'Zerind_copil_oradea',
                label: '217',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Craiova_copil_ramnicu_valcea',
                label: '366',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-pitesti',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Pitesti_copil_ramnicu_valcea',
                label: '317',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-sibiu',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Sibiu_copil_ramnicu_valcea',
                label: '300',
                type: 'straight'
            },
            {
                id: 'lugoj-mehadia',
                source: 'Lugoj_copil_timisoara',
                target: 'Mehadia_copil_lugoj',
                label: '299',
                type: 'straight'
            },
             {
                id: 'lugoj-timisoara',
                source: 'Lugoj_copil_timisoara',
                target: 'Timisoara_copil_lugoj',
                label: '340',
                type: 'straight'
            },
            {
                id: 'fagaras-bucuresti',
                source: 'Fagaras_copil_sibiu',
                target: 'Bucuresti_copil_fagaras',
                label: '450',
                type: 'straight'
            },
            {
                id: 'fagaras-sibiu',
                source: 'Fagaras_copil_sibiu',
                target: 'Sibiu_copil_fagaras',
                label: '338',
                type: 'straight'
            },

            {
                id: 'mehadia-drobeta',
                source: 'Mehadia_copil_lugoj',
                target: 'Drobeta_copil_mehadia',
                label: '374',
                type: 'straight'
            },
            {
                id: 'mehadia-lugoj',
                source: 'Mehadia_copil_lugoj',
                target: 'Lugoj_copil_mehadia',
                label: '369',
                type: 'straight'
            },
            {
                id: 'pitesti-bucuresti',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Bucuresti_copil_pitesti',
                label: '418',
                type: 'straight'
            },
            {
                id: 'pitesti-craiova',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Craiova_copil_pitesti',
                label: '455',
                type: 'straight'
            },
            {
                id: 'pitesti-ramnicu_valcea',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Ramnicu_valcea_copil_pitesti',
                label: '414',
                type: 'straight'
            },
            {
                id: 'drobeta-craiova',
                source: 'Craiova_copil_ramnicu_valcea',
                target: 'Drobeta_copil_craiova',
                label: '486',
                type: 'straight'
            },
            {
                id: 'pitesti-craiova',
                source: 'Craiova_copil_ramnicu_valcea',
                target: 'Pitesti_copil_craiova',
                label: '504',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Craiova_copil_ramnicu_valcea',
                target: 'Ramnicu_valcea_copil_craiova',
                label: '512',
                type: 'straight'
            }
        ]
    },

    //Pasul

     {
         noduri: [

             {
                id: 'Start',
                position: {x:800 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:800 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:1200 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:1180 , y:300},
                data: {label: 'Arad(vizitat)', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1300 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Arad(vizitat)', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:890 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad(vizitat)', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea(vizitat)', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_oradea',
                position: {x:1400 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 297},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Zerind_copil_oradea',
                position: {x:1250 , y:400},
                data: {label: 'Zerind (vizitat)', g: 217},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Craiova_copil_ramnicu_valcea',
                position: {x:400 , y:400},
                data: {label: 'Craiova', g: 366},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Pitesti_copil_ramnicu_valcea',
                position: {x:510 , y:400},
                data: {label: 'Pitesti', g: 317},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_ramnicu_valcea',
                position: {x:620 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Mehadia_copil_lugoj',
                position: {x:850 , y:400},
                data: {label: 'Mehadia', g: 299},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Timisoara_copil_lugoj',
                position: {x:990 , y:400},
                data: {label: 'Timisoara(vizitat)', g: 340},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Bucuresti_copil_fagaras',
                position: {x: 180, y:400},
                data: {label: 'Bucuresti', g: 450},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Sibiu_copil_fagaras',
                position: {x:290 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 338},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Drobeta_copil_mehadia',
                position: {x:810 , y:500},
                data: {label: 'Drobeta(vizitat)', g: 374},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    } 
            },
            {
                id: 'Lugoj_copil_mehadia',
                position: {x:920 , y:500},
                data: {label: 'Lugoj(vizitat)', g: 369},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    } 
            },
            {
                id: 'Bucuresti_copil_pitesti',
                position: {x:500 , y:500},
                data: {label: 'Bucuresti', g: 418},
                style: {
                    width: 70,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
             {
                id: 'Craiova_copil_pitesti',
                position: {x:580 , y:500},
                data: {label: 'Craiova', g: 455},
                style: {
                    width: 70,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
             {
                id: 'Ramnicu_valcea_copil_pitesti',
                position: {x:660 , y:500},
                data: {label: 'Ramnicu Valcea', g: 414},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Drobeta_copil_craiova',
                position: {x:250 , y:500},
                data: {label: 'Drobeta', g: 486},
                style: {
                    width: 60,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Pitesti_copil_craiova',
                position: {x:330 , y:500},
                data: {label: 'Pitesti', g: 504},
                style: {
                    width: 50,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Ramnicu_valcea_copil_craiova',
                position: {x:390 , y:500},
                data: {label: 'Ramnicu Valcea', g: 512},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            }
        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            },
            {
                id: 'oradea-sibiu',
                source: 'Oradea_copil_zerind',
                target: 'Sibiu_copil_oradea',
                label: '297',
                type: 'straight'
            },
            {
                id: 'oradea-zerind',
                source: 'Oradea_copil_zerind',
                target: 'Zerind_copil_oradea',
                label: '217',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Craiova_copil_ramnicu_valcea',
                label: '366',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-pitesti',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Pitesti_copil_ramnicu_valcea',
                label: '317',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-sibiu',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Sibiu_copil_ramnicu_valcea',
                label: '300',
                type: 'straight'
            },
            {
                id: 'lugoj-mehadia',
                source: 'Lugoj_copil_timisoara',
                target: 'Mehadia_copil_lugoj',
                label: '299',
                type: 'straight'
            },
             {
                id: 'lugoj-timisoara',
                source: 'Lugoj_copil_timisoara',
                target: 'Timisoara_copil_lugoj',
                label: '340',
                type: 'straight'
            },
            {
                id: 'fagaras-bucuresti',
                source: 'Fagaras_copil_sibiu',
                target: 'Bucuresti_copil_fagaras',
                label: '450',
                type: 'straight'
            },
            {
                id: 'fagaras-sibiu',
                source: 'Fagaras_copil_sibiu',
                target: 'Sibiu_copil_fagaras',
                label: '338',
                type: 'straight'
            },

            {
                id: 'mehadia-drobeta',
                source: 'Mehadia_copil_lugoj',
                target: 'Drobeta_copil_mehadia',
                label: '374',
                type: 'straight'
            },
            {
                id: 'mehadia-lugoj',
                source: 'Mehadia_copil_lugoj',
                target: 'Lugoj_copil_mehadia',
                label: '369',
                type: 'straight'
            },
            {
                id: 'pitesti-bucuresti',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Bucuresti_copil_pitesti',
                label: '418',
                type: 'straight'
            },
            {
                id: 'pitesti-craiova',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Craiova_copil_pitesti',
                label: '455',
                type: 'straight'
            },
            {
                id: 'pitesti-ramnicu_valcea',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Ramnicu_valcea_copil_pitesti',
                label: '414',
                type: 'straight'
            },
            {
                id: 'drobeta-craiova',
                source: 'Craiova_copil_ramnicu_valcea',
                target: 'Drobeta_copil_craiova',
                label: '486',
                type: 'straight'
            },
            {
                id: 'pitesti-craiova',
                source: 'Craiova_copil_ramnicu_valcea',
                target: 'Pitesti_copil_craiova',
                label: '504',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Craiova_copil_ramnicu_valcea',
                target: 'Ramnicu_valcea_copil_craiova',
                label: '512',
                type: 'straight'
            }
        ]
    },

    //Pasul
    {
         noduri: [

             {
                id: 'Start',
                position: {x:800 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:800 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:1200 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:1180 , y:300},
                data: {label: 'Arad(vizitat)', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1300 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Arad(vizitat)', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:890 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad(vizitat)', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea(vizitat)', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_oradea',
                position: {x:1400 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 297},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Zerind_copil_oradea',
                position: {x:1250 , y:400},
                data: {label: 'Zerind (vizitat)', g: 217},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Craiova_copil_ramnicu_valcea',
                position: {x:400 , y:400},
                data: {label: 'Craiova', g: 366},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Pitesti_copil_ramnicu_valcea',
                position: {x:510 , y:400},
                data: {label: 'Pitesti', g: 317},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_ramnicu_valcea',
                position: {x:620 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Mehadia_copil_lugoj',
                position: {x:850 , y:400},
                data: {label: 'Mehadia', g: 299},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Timisoara_copil_lugoj',
                position: {x:990 , y:400},
                data: {label: 'Timisoara(vizitat)', g: 340},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Bucuresti_copil_fagaras',
                position: {x: 180, y:400},
                data: {label: 'Bucuresti', g: 450},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Sibiu_copil_fagaras',
                position: {x:290 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 338},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Drobeta_copil_mehadia',
                position: {x:810 , y:500},
                data: {label: 'Drobeta(vizitat)', g: 374},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    } 
            },
            {
                id: 'Lugoj_copil_mehadia',
                position: {x:920 , y:500},
                data: {label: 'Lugoj(vizitat)', g: 369},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    } 
            },
            {
                id: 'Bucuresti_copil_pitesti',
                position: {x:500 , y:500},
                data: {label: 'Bucuresti', g: 418},
                style: {
                    width: 70,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
             {
                id: 'Craiova_copil_pitesti',
                position: {x:580 , y:500},
                data: {label: 'Craiova', g: 455},
                style: {
                    width: 70,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
             {
                id: 'Ramnicu_valcea_copil_pitesti',
                position: {x:660 , y:500},
                data: {label: 'Ramnicu Valcea(vizitat)', g: 414},
                style: {
                    width: 100,
                    height: 40,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    } 
            },
            {
                id: 'Drobeta_copil_craiova',
                position: {x:250 , y:500},
                data: {label: 'Drobeta', g: 486},
                style: {
                    width: 60,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Pitesti_copil_craiova',
                position: {x:330 , y:500},
                data: {label: 'Pitesti', g: 504},
                style: {
                    width: 50,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Ramnicu_valcea_copil_craiova',
                position: {x:390 , y:500},
                data: {label: 'Ramnicu Valcea', g: 512},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            }
        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            },
            {
                id: 'oradea-sibiu',
                source: 'Oradea_copil_zerind',
                target: 'Sibiu_copil_oradea',
                label: '297',
                type: 'straight'
            },
            {
                id: 'oradea-zerind',
                source: 'Oradea_copil_zerind',
                target: 'Zerind_copil_oradea',
                label: '217',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Craiova_copil_ramnicu_valcea',
                label: '366',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-pitesti',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Pitesti_copil_ramnicu_valcea',
                label: '317',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-sibiu',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Sibiu_copil_ramnicu_valcea',
                label: '300',
                type: 'straight'
            },
            {
                id: 'lugoj-mehadia',
                source: 'Lugoj_copil_timisoara',
                target: 'Mehadia_copil_lugoj',
                label: '299',
                type: 'straight'
            },
             {
                id: 'lugoj-timisoara',
                source: 'Lugoj_copil_timisoara',
                target: 'Timisoara_copil_lugoj',
                label: '340',
                type: 'straight'
            },
            {
                id: 'fagaras-bucuresti',
                source: 'Fagaras_copil_sibiu',
                target: 'Bucuresti_copil_fagaras',
                label: '450',
                type: 'straight'
            },
            {
                id: 'fagaras-sibiu',
                source: 'Fagaras_copil_sibiu',
                target: 'Sibiu_copil_fagaras',
                label: '338',
                type: 'straight'
            },

            {
                id: 'mehadia-drobeta',
                source: 'Mehadia_copil_lugoj',
                target: 'Drobeta_copil_mehadia',
                label: '374',
                type: 'straight'
            },
            {
                id: 'mehadia-lugoj',
                source: 'Mehadia_copil_lugoj',
                target: 'Lugoj_copil_mehadia',
                label: '369',
                type: 'straight'
            },
            {
                id: 'pitesti-bucuresti',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Bucuresti_copil_pitesti',
                label: '418',
                type: 'straight'
            },
            {
                id: 'pitesti-craiova',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Craiova_copil_pitesti',
                label: '455',
                type: 'straight'
            },
            {
                id: 'pitesti-ramnicu_valcea',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Ramnicu_valcea_copil_pitesti',
                label: '414',
                type: 'straight'
            },
            {
                id: 'drobeta-craiova',
                source: 'Craiova_copil_ramnicu_valcea',
                target: 'Drobeta_copil_craiova',
                label: '486',
                type: 'straight'
            },
            {
                id: 'pitesti-craiova',
                source: 'Craiova_copil_ramnicu_valcea',
                target: 'Pitesti_copil_craiova',
                label: '504',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Craiova_copil_ramnicu_valcea',
                target: 'Ramnicu_valcea_copil_craiova',
                label: '512',
                type: 'straight'
            }
        ]
    },

    //Pasul
     {
         noduri: [

             {
                id: 'Start',
                position: {x:800 , y:100},
                data: {label: 'Arad', g: 0},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Sibiu_copil_arad',
                position: {x:300 , y:200},
                data: {label: 'Sibiu', g: 140},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Timisoara_copil_arad',
                position: {x:800 , y:200},
                data: {label: 'Timisoara', g: 118},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Zerind_copil_arad',
                position: {x:1200 , y:200},
                data: {label: 'Zerind', g: 75},
                style: { background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_zerind',
                position: {x:1180 , y:300},
                data: {label: 'Arad(vizitat)', g: 150},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Oradea_copil_zerind',
                position: {x:1300 , y:300},
                data: {label: 'Oradea', g: 146},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'}
            },
            {
                id: 'Arad_copil_timisoara',
                position: {x:760 , y:300},
                data: {label: 'Arad(vizitat)', g: 236},
                style: { 
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'}
            },
            {
                id: 'Lugoj_copil_timisoara',
                position: {x:890 , y:300},
                data: {label: 'Lugoj', g: 229},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
             {
                id: 'Arad_copil_sibiu',
                position: {x:150 , y:300},
                data: {label: 'Arad(vizitat)', g: 280},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Fagaras_copil_sibiu',
                position: {x:270 , y:300},
                data: {label: 'Fagaras', g: 239},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Oradea_copil_sibiu',
                position: {x:380 , y:300},
                data: {label: 'Oradea(vizitat)', g: 291},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
             {
                id: 'Ramnicu_valcea_copil_sibiu',
                position: {x:500 , y:300},
                data: {label: 'Ramnicu Valcea', g: 220},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_oradea',
                position: {x:1400 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 297},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Zerind_copil_oradea',
                position: {x:1250 , y:400},
                data: {label: 'Zerind (vizitat)', g: 217},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Craiova_copil_ramnicu_valcea',
                position: {x:400 , y:400},
                data: {label: 'Craiova', g: 366},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Pitesti_copil_ramnicu_valcea',
                position: {x:510 , y:400},
                data: {label: 'Pitesti', g: 317},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Sibiu_copil_ramnicu_valcea',
                position: {x:620 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 300},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Mehadia_copil_lugoj',
                position: {x:850 , y:400},
                data: {label: 'Mehadia', g: 299},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    }
            },
            {
                id: 'Timisoara_copil_lugoj',
                position: {x:990 , y:400},
                data: {label: 'Timisoara(vizitat)', g: 340},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Bucuresti_copil_fagaras',
                position: {x: 180, y:400},
                data: {label: 'Bucuresti', g: 450},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    }
            },
             {
                id: 'Sibiu_copil_fagaras',
                position: {x:290 , y:400},
                data: {label: 'Sibiu(vizitat)', g: 338},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    }
            },
            {
                id: 'Drobeta_copil_mehadia',
                position: {x:810 , y:500},
                data: {label: 'Drobeta(vizitat)', g: 374},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    } 
            },
            {
                id: 'Lugoj_copil_mehadia',
                position: {x:920 , y:500},
                data: {label: 'Lugoj(vizitat)', g: 369},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    } 
            },
            {
                id: 'Bucuresti_copil_pitesti',
                position: {x:500 , y:500},
                data: {label: 'Bucuresti', g: 418},
                style: {
                    width: 70,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#FFF3B0'
                    } 
            },
             {
                id: 'Craiova_copil_pitesti',
                position: {x:580 , y:500},
                data: {label: 'Craiova', g: 455},
                style: {
                    width: 70,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
             {
                id: 'Ramnicu_valcea_copil_pitesti',
                position: {x:660 , y:500},
                data: {label: 'Ramnicu Valcea(vizitat)', g: 414},
                style: {
                    width: 100,
                    height: 40,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BBE0AD'
                    } 
            },
            {
                id: 'Drobeta_copil_craiova',
                position: {x:250 , y:500},
                data: {label: 'Drobeta', g: 486},
                style: {
                    width: 60,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Pitesti_copil_craiova',
                position: {x:330 , y:500},
                data: {label: 'Pitesti', g: 504},
                style: {
                    width: 50,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            },
            {
                id: 'Ramnicu_valcea_copil_craiova',
                position: {x:390 , y:500},
                data: {label: 'Ramnicu Valcea', g: 512},
                style: {
                    width: 100,
                    height: 30,
                    fontSize: '12px',
                    padding: '5px',
                    background: '#BFADE0'
                    } 
            }
        ],
        
        muchii: [
            {
                id: 's-sibiu',
                source: 'Start',
                target: 'Sibiu_copil_arad',
                label: '140',
                type: 'straight'
            },
            {
                id: 's-timisoara',
                source: 'Start',
                target: 'Timisoara_copil_arad',
                label: '118',
                type: 'straight'
            },
            {
                id: 's-zerind',
                source: 'Start',
                target: 'Zerind_copil_arad',
                label: '75',
                type: 'straight'
            },
            {
                id: 'zerind-arad',
                source: 'Zerind_copil_arad',
                target: 'Arad_copil_zerind',
                label: '150',
                type: 'straight'
            },
             {
                id: 'zerind-oradea',
                source: 'Zerind_copil_arad',
                target: 'Oradea_copil_zerind',
                label: '146',
                type: 'straight'
            },
            {
                id: 'timisoara-arad',
                source: 'Timisoara_copil_arad',
                target: 'Arad_copil_timisoara',
                label: '236',
                type: 'straight'
            },
            {
                id: 'timisoara-lugoj',
                source: 'Timisoara_copil_arad',
                target: 'Lugoj_copil_timisoara',
                label: '229',
                type: 'straight'
            },
            {
                id: 'sibiu-fagaras',
                source: 'Sibiu_copil_arad',
                target: 'Fagaras_copil_sibiu',
                label: '239',
                type: 'straight'
            },
            {
                id: 'sibiu-ramnicu_valcea',
                source: 'Sibiu_copil_arad',
                target: 'Ramnicu_valcea_copil_sibiu',
                label: '220',
                type: 'straight'
            },
            {
                id: 'sibiu-oradea',
                source: 'Sibiu_copil_arad',
                target: 'Oradea_copil_sibiu',
                label: '291',
                type: 'straight'
            },
            {
                id: 'sibiu-arad',
                source: 'Sibiu_copil_arad',
                target: 'Arad_copil_sibiu',
                label: '280',
                type: 'straight'
            },
            {
                id: 'oradea-sibiu',
                source: 'Oradea_copil_zerind',
                target: 'Sibiu_copil_oradea',
                label: '297',
                type: 'straight'
            },
            {
                id: 'oradea-zerind',
                source: 'Oradea_copil_zerind',
                target: 'Zerind_copil_oradea',
                label: '217',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Craiova_copil_ramnicu_valcea',
                label: '366',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-pitesti',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Pitesti_copil_ramnicu_valcea',
                label: '317',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-sibiu',
                source: 'Ramnicu_valcea_copil_sibiu',
                target: 'Sibiu_copil_ramnicu_valcea',
                label: '300',
                type: 'straight'
            },
            {
                id: 'lugoj-mehadia',
                source: 'Lugoj_copil_timisoara',
                target: 'Mehadia_copil_lugoj',
                label: '299',
                type: 'straight'
            },
             {
                id: 'lugoj-timisoara',
                source: 'Lugoj_copil_timisoara',
                target: 'Timisoara_copil_lugoj',
                label: '340',
                type: 'straight'
            },
            {
                id: 'fagaras-bucuresti',
                source: 'Fagaras_copil_sibiu',
                target: 'Bucuresti_copil_fagaras',
                label: '450',
                type: 'straight'
            },
            {
                id: 'fagaras-sibiu',
                source: 'Fagaras_copil_sibiu',
                target: 'Sibiu_copil_fagaras',
                label: '338',
                type: 'straight'
            },

            {
                id: 'mehadia-drobeta',
                source: 'Mehadia_copil_lugoj',
                target: 'Drobeta_copil_mehadia',
                label: '374',
                type: 'straight'
            },
            {
                id: 'mehadia-lugoj',
                source: 'Mehadia_copil_lugoj',
                target: 'Lugoj_copil_mehadia',
                label: '369',
                type: 'straight'
            },
            {
                id: 'pitesti-bucuresti',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Bucuresti_copil_pitesti',
                label: '418',
                type: 'straight'
            },
            {
                id: 'pitesti-craiova',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Craiova_copil_pitesti',
                label: '455',
                type: 'straight'
            },
            {
                id: 'pitesti-ramnicu_valcea',
                source: 'Pitesti_copil_ramnicu_valcea',
                target: 'Ramnicu_valcea_copil_pitesti',
                label: '414',
                type: 'straight'
            },
            {
                id: 'drobeta-craiova',
                source: 'Craiova_copil_ramnicu_valcea',
                target: 'Drobeta_copil_craiova',
                label: '486',
                type: 'straight'
            },
            {
                id: 'pitesti-craiova',
                source: 'Craiova_copil_ramnicu_valcea',
                target: 'Pitesti_copil_craiova',
                label: '504',
                type: 'straight'
            },
            {
                id: 'ramnicu_valcea-craiova',
                source: 'Craiova_copil_ramnicu_valcea',
                target: 'Ramnicu_valcea_copil_craiova',
                label: '512',
                type: 'straight'
            }
        ]
    }
]

