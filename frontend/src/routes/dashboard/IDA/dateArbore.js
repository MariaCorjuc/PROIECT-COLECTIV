import { Background, Position } from "reactflow";

export const istoricPasi=[

    {

        //Iteratia 1

        //Pasul 0
        noduri: [
        {id: 'Start', type: 'nodul',position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 366}}
        ],
        muchii: []
    },

    //Pasul 1
    {
        noduri : [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 366}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Timisoara_copil_Arad', type: 'nodul', position: {x:400 , y:250}, data: {label: 'Timisoara', g: 118, h:329}
            },
            {
                id: 'Zerind_copil_Arad',type: 'nodul', position: {x:600 , y:250},data: {label: 'Zerind', g: 75, h:374}
            }

        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Arad-Timisoara',source: 'Start', target: 'Timisoara_copil_Arad', type: 'straight'
            },
            {
                id: 'Arad-Zerind', source: 'Start', target: 'Zerind_copil_Arad', type: 'straight'
            }
        ]
    },

    //Pasul 2
    {
        noduri : [
            {
                id: 'Start', type: 'nodul',position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 366}
            },
            {
                id: 'Sibiu_copil_Arad',type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253, verif: '>366'}
            },
            {
                id: 'Timisoara_copil_Arad', type: 'nodul', position: {x:400 , y:250}, data: {label: 'Timisoara', g: 118, h:329}
            },
            {
                id: 'Zerind_copil_Arad', type: 'nodul', position: {x:600 , y:250}, data: {label: 'Zerind', g: 75, h:374}
            }

        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start',target: 'Sibiu_copil_Arad',type: 'straight'
            },
            {
                id: 'Arad-Timisoara', source: 'Start', target: 'Timisoara_copil_Arad', type: 'straight'
            },
            {
                id: 'Arad-Zerind', source: 'Start', target: 'Zerind_copil_Arad', type: 'straight'
            }
        ]
    },

    //Pasul 3
    {
        noduri : [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 366}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253, verif: '>366'}
            },
            {
                id: 'Timisoara_copil_Arad', type: 'nodul', position: {x:400 , y:250}, data: {label: 'Timisoara', g: 118, h:329, verif: '>366'}
            },
            {
                id: 'Zerind_copil_Arad', type: 'nodul', position: {x:600 , y:250}, data: {label: 'Zerind', g: 75, h:374}
            }

        ],
        muchii: [
            {
                id: 'Arad-Sibiu', source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Arad-Timisoara', source: 'Start', target: 'Timisoara_copil_Arad', type: 'straight'
            },
            {
                id: 'Arad-Zerind',source: 'Start',target: 'Zerind_copil_Arad', type: 'straight'
            }
        ]
    },

    //Pasul 4
     {
        noduri : [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 366}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250},data: {label: 'Sibiu', g: 140, h:253, verif: '>366'}
            },
            {
                id: 'Timisoara_copil_Arad',type: 'nodul', position: {x:400 , y:250}, data: {label: 'Timisoara', g: 118, h:329, verif: '>366'}
            },
            {
                id: 'Zerind_copil_Arad', type: 'nodul', position: {x:600 , y:250}, data: {label: 'Zerind', g: 75, h:374, verif: '>366'}
            }

        ],
        muchii: [
            {
                id: 'Arad-Sibiu', source: 'Start', target: 'Sibiu_copil_Arad',type: 'straight'
            },
            {
                id: 'Arad-Timisoara',source: 'Start', target: 'Timisoara_copil_Arad', type: 'straight'
            },
            {
                id: 'Arad-Zerind', source: 'Start',target: 'Zerind_copil_Arad', type: 'straight'
            }
        ]
    },

    //Iteratia 2
    {
         noduri: [
        {id: 'Start', type: 'nodul',position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 393}}
        ],
        muchii: []
    },

    //Pasul 1
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 393}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            }
        ]
    },

    //Pasul 2
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 393}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:150 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 3
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 393}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:150 , y:400}, data: {label: 'Fagaras', g: 239, h: 176, verif: '>393'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 4
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 393}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:150 , y:400}, data: {label: 'Fagaras', g: 239, h: 176, verif: '>393'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:350 , y:400}, data: {label: 'Oradea', g: 291, h: 380}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 5
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 393}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:150 , y:400}, data: {label: 'Fagaras', g: 239, h: 176, verif: '>393'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:350 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>393'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 6
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 393}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:150 , y:400}, data: {label: 'Fagaras', g: 239, h: 176, verif: '>393'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:350 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>393'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:530 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 7
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 393}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:150 , y:400}, data: {label: 'Fagaras', g: 239, h: 176, verif: '>393'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:350 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>393'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:530 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193, verif: '>393'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
           {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 8
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 393}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:150 , y:400}, data: {label: 'Fagaras', g: 239, h: 176, verif: '>393'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:350 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>393'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:530 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193, verif: '>393'}
            },
            {
                id: 'Timisoara_copil_Arad',type: 'nodul', position: {x:400 , y:250}, data: {label: 'Timisoara', g: 118, h:329}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
             
            {
                id: 'Arad-Timisoara',source: 'Start', target: 'Timisoara_copil_Arad', type: 'straight'
            }
        ]
    },

    //Pasul 9
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 393}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:150 , y:400}, data: {label: 'Fagaras', g: 239, h: 176, verif: '>393'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:350 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>393'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:530 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193, verif: '>393'}
            },
            {
                id: 'Timisoara_copil_Arad',type: 'nodul', position: {x:400 , y:250}, data: {label: 'Timisoara', g: 118, h:329, verif: '>393'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Arad-Timisoara',source: 'Start', target: 'Timisoara_copil_Arad', type: 'straight'
            }
        ]
    },

    //Pasul 10
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 393}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:150 , y:400}, data: {label: 'Fagaras', g: 239, h: 176, verif: '>393'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:350 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>393'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:530 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193, verif: '>393'}
            },
            {
                id: 'Timisoara_copil_Arad',type: 'nodul', position: {x:400 , y:250}, data: {label: 'Timisoara', g: 118, h:329, verif: '>393'}
            },
            {
                id: 'Zerind_copil_Arad', type: 'nodul', position: {x:600 , y:250}, data: {label: 'Zerind', g: 75, h:374}
            }

        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Arad-Timisoara',source: 'Start', target: 'Timisoara_copil_Arad', type: 'straight'
            },
            {
                id: 'Arad-Zerind', source: 'Start', target: 'Zerind_copil_Arad', type: 'straight'
            }
        ]
    },

    //Pasul 11
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 393}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:150 , y:400}, data: {label: 'Fagaras', g: 239, h: 176, verif: '>393'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:350 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>393'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:530 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193, verif: '>393'}
            },
            {
                id: 'Timisoara_copil_Arad',type: 'nodul', position: {x:400 , y:250}, data: {label: 'Timisoara', g: 118, h:329, verif: '>393'}
            },
            {
                id: 'Zerind_copil_Arad', type: 'nodul', position: {x:600 , y:250}, data: {label: 'Zerind', g: 75, h:374, verif: '>393'}
            }

        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Arad-Timisoara',source: 'Start', target: 'Timisoara_copil_Arad', type: 'straight'
            },
            {
                id: 'Arad-Zerind', source: 'Start', target: 'Zerind_copil_Arad', type: 'straight'
            }
        ]
    },

    //Iteratia 3
     {
         noduri: [
        {id: 'Start', type: 'nodul',position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 413}}
        ],
        muchii: []
    },

    //Pasul 1
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 413}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            }
        ]
    },

    //Pasul 2
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 413}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 3
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 413}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176, verif: '>413'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 4
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 413}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176, verif: '>413'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 5
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 413}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176, verif: '>413'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>413'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 6
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 413}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176, verif: '>413'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>413'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 7
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 413}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176, verif: '>413'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>413'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            }
        ]
    },

    //Pasul 8
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 413}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176, verif: '>413'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>413'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>413'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            }
        ]
    },
    //Pasul 9
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 413}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176, verif: '>413'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>413'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>413'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            }
        ]
    },

    //Pasul 10
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 413}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176, verif: '>413'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>413'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>413'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100, verif: '>413'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            }
        ]
    },

    //Pasul 11
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 413}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176, verif: '>413'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>413'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>413'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100, verif: '>413'}
            },
            {
                id: 'Timisoara_copil_Arad',type: 'nodul', position: {x:400 , y:250}, data: {label: 'Timisoara', g: 118, h:329}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            },
              {
                id: 'Arad-Timisoara',source: 'Start', target: 'Timisoara_copil_Arad', type: 'straight'
            }
        ]
    },

    //Pasul 12
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 413}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176, verif: '>413'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>413'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>413'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100, verif: '>413'}
            },
            {
                id: 'Timisoara_copil_Arad',type: 'nodul', position: {x:400 , y:250}, data: {label: 'Timisoara', g: 118, h:329, verif: '>413'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            },
              {
                id: 'Arad-Timisoara',source: 'Start', target: 'Timisoara_copil_Arad', type: 'straight'
            }
        ]
    },

    //Pasul 13
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 413}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176, verif: '>413'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>413'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>413'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100, verif: '>413'}
            },
            {
                id: 'Timisoara_copil_Arad',type: 'nodul', position: {x:400 , y:250}, data: {label: 'Timisoara', g: 118, h:329, verif: '>413'}
            },
            {
                 id: 'Zerind_copil_Arad', type: 'nodul', position: {x:600 , y:250}, data: {label: 'Zerind', g: 75, h:374}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            },
              {
                id: 'Arad-Timisoara',source: 'Start', target: 'Timisoara_copil_Arad', type: 'straight'
            },
            {
                id: 'Arad-Zerind', source: 'Start', target: 'Zerind_copil_Arad', type: 'straight'
            }
        ]
    },

    //Pasul 14
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 413}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176, verif: '>413'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>413'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>413'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100, verif: '>413'}
            },
            {
                id: 'Timisoara_copil_Arad',type: 'nodul', position: {x:400 , y:250}, data: {label: 'Timisoara', g: 118, h:329, verif: '>413'}
            },
            {
                 id: 'Zerind_copil_Arad', type: 'nodul', position: {x:600 , y:250}, data: {label: 'Zerind', g: 75, h:374, verif: '>413'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            },
              {
                id: 'Arad-Timisoara',source: 'Start', target: 'Timisoara_copil_Arad', type: 'straight'
            },
            {
                id: 'Arad-Zerind', source: 'Start', target: 'Zerind_copil_Arad', type: 'straight'
            }
        ]
    },

    //Iteratia 4
     {
         noduri: [
        {id: 'Start', type: 'nodul',position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 415}}
        ],
        muchii: []
    },

    //Pasul 1
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 415}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            }
        ]
    },

    //Pasul 2
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 415}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 3
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 415}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
             {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            }
        ]
    },

    //Pasul 4
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 415}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
             {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>415'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            }
        ]
    },

    //Pasul 5
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 415}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>415'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 6
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 415}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>415'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>415'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 7
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 415}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>415'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>415'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 8
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 415}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>415'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>415'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            }
        ]
    },

    //Pasul 9
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 415}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>415'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>415'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>415'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            }
        ]
    },
    //Pasul 10
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 415}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>415'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>415'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>415'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            }
        ]
    },

    //Pasul 11
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 415}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>415'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>415'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>415'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100, verif: '>415'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            }
        ]
    },

    //Pasul 12
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 415}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>415'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>415'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>415'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100, verif: '>415'}
            },
            {
                id: 'Timisoara_copil_Arad',type: 'nodul', position: {x:400 , y:250}, data: {label: 'Timisoara', g: 118, h:329}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            },
              {
                id: 'Arad-Timisoara',source: 'Start', target: 'Timisoara_copil_Arad', type: 'straight'
            }
        ]
    },

    //Pasul 13
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 415}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>415'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>415'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>415'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100, verif: '>415'}
            },
            {
                id: 'Timisoara_copil_Arad',type: 'nodul', position: {x:400 , y:250}, data: {label: 'Timisoara', g: 118, h:329, verif: '>415'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            },
              {
                id: 'Arad-Timisoara',source: 'Start', target: 'Timisoara_copil_Arad', type: 'straight'
            }
        ]
    },

    //Pasul 14
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 415}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>415'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>415'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>415'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100, verif: '>415'}
            },
            {
                id: 'Timisoara_copil_Arad',type: 'nodul', position: {x:400 , y:250}, data: {label: 'Timisoara', g: 118, h:329, verif: '>415'}
            },
            {
                 id: 'Zerind_copil_Arad', type: 'nodul', position: {x:600 , y:250}, data: {label: 'Zerind', g: 75, h:374}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            },
              {
                id: 'Arad-Timisoara',source: 'Start', target: 'Timisoara_copil_Arad', type: 'straight'
            },
            {
                id: 'Arad-Zerind', source: 'Start', target: 'Zerind_copil_Arad', type: 'straight'
            }
        ]
    },

    //Pasul 15
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 415}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
           {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>415'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>415'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>415'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100, verif: '>415'}
            },
            {
                id: 'Timisoara_copil_Arad',type: 'nodul', position: {x:400 , y:250}, data: {label: 'Timisoara', g: 118, h:329, verif: '>415'}
            },
            {
                 id: 'Zerind_copil_Arad', type: 'nodul', position: {x:600 , y:250}, data: {label: 'Zerind', g: 75, h:374, verif: '>415'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            },
              {
                id: 'Arad-Timisoara',source: 'Start', target: 'Timisoara_copil_Arad', type: 'straight'
            },
            {
                id: 'Arad-Zerind', source: 'Start', target: 'Zerind_copil_Arad', type: 'straight'
            }
        ]
    },

    //Iteratia 5
    {
         noduri: [
        {id: 'Start', type: 'nodul',position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 417}}
        ],
        muchii: []
    },

    //Pasul 1
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 417}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            }
        ]
    },

    //Pasul 2
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 417}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 3
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 417}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
             {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            }
        ]
    },

    //Pasul 4
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 417}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
             {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>417'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            }
        ]
    },

    //Pasul 5
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 417}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>417'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 6
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 417}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>417'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>417'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 7
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 417}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>417'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>417'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 8
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 417}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>417'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>417'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            }
        ]
    },

    //Pasul 9
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 417}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>417'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>417'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>417'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            }
        ]
    },
    //Pasul 10
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 417}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>417'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>417'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>417'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            }
        ]
    },

    //Pasul 11
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 417}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>417'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>417'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>417'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100}
            },
            {
                id: 'Bucuresti_copil_Pitesti', type: 'nodul', position: {x:500 , y:700}, data: {label: 'Bucuresti', g: 418, h: 0}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Pitesti-Bucuresti',source: 'Pitesti_copil_Ramnicu_Valcea', target: 'Bucuresti_copil_Pitesti', type: 'straight'
            }
        ]
    },

    //Pasul 12
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 417}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>417'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>417'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>417'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100}
            },
            {
                id: 'Bucuresti_copil_Pitesti', type: 'nodul', position: {x:500 , y:700}, data: {label: 'Bucuresti', g: 418, h: 0, verif: '>417'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Pitesti-Bucuresti',source: 'Pitesti_copil_Ramnicu_Valcea', target: 'Bucuresti_copil_Pitesti', type: 'straight'
            }
        ]
    },

    //Pasul 13
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 417}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>417'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>417'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>417'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100}
            },
            {
                id: 'Bucuresti_copil_Pitesti', type: 'nodul', position: {x:500 , y:700}, data: {label: 'Bucuresti', g: 418, h: 0, verif: '>417'}
            },
            {
                id: 'Craiova_copil_Pitesti', type: 'nodul', position: {x:700 , y:700}, data: {label: 'Craiova', g: 455, h: 160}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Pitesti-Bucuresti',source: 'Pitesti_copil_Ramnicu_Valcea', target: 'Bucuresti_copil_Pitesti', type: 'straight'
            },
            {
                id: 'Pitesti-Craiova',source: 'Pitesti_copil_Ramnicu_Valcea', target: 'Craiova_copil_Pitesti', type: 'straight'
            }
        ]
    },

    //Pasul 14
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 417}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>417'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>417'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>417'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100}
            },
            {
                id: 'Bucuresti_copil_Pitesti', type: 'nodul', position: {x:500 , y:700}, data: {label: 'Bucuresti', g: 418, h: 0, verif: '>417'}
            },
            {
                id: 'Craiova_copil_Pitesti', type: 'nodul', position: {x: 700 , y:700}, data: {label: 'Craiova', g: 455, h: 160, verif: '>417'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Pitesti-Bucuresti',source: 'Pitesti_copil_Ramnicu_Valcea', target: 'Bucuresti_copil_Pitesti', type: 'straight'
            },
            {
                id: 'Pitesti-Craiova',source: 'Pitesti_copil_Ramnicu_Valcea', target: 'Craiova_copil_Pitesti', type: 'straight'
            }
        ]
    },


    //Pasul 15
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 417}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>417'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>417'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>417'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100}
            },
            {
                id: 'Bucuresti_copil_Pitesti', type: 'nodul', position: {x:500 , y:700}, data: {label: 'Bucuresti', g: 418, h: 0, verif: '>417'}
            },
            {
                id: 'Craiova_copil_Pitesti', type: 'nodul', position: {x:700 , y:700}, data: {label: 'Craiova', g: 455, h: 160, verif: '>417'}
            },
             {
                id: 'Timisoara_copil_Arad',type: 'nodul', position: {x:400 , y:250}, data: {label: 'Timisoara', g: 118, h:329}
            }

        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Pitesti-Bucuresti',source: 'Pitesti_copil_Ramnicu_Valcea', target: 'Bucuresti_copil_Pitesti', type: 'straight'
            },
            {
                id: 'Pitesti-Craiova',source: 'Pitesti_copil_Ramnicu_Valcea', target: 'Craiova_copil_Pitesti', type: 'straight'
            },
            {
                id: 'Arad-Timisoara',source: 'Start', target: 'Timisoara_copil_Arad', type: 'straight'
            }
        ]
    },

    //Pasul 16
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 417}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>417'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>417'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>417'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100}
            },
            {
                id: 'Bucuresti_copil_Pitesti', type: 'nodul', position: {x:500 , y:700}, data: {label: 'Bucuresti', g: 418, h: 0, verif: '>417'}
            },
            {
                id: 'Craiova_copil_Pitesti', type: 'nodul', position: {x:700 , y:700}, data: {label: 'Craiova', g: 455, h: 160, verif: '>417'}
            },
            {
                id: 'Timisoara_copil_Arad',type: 'nodul', position: {x:400 , y:250}, data: {label: 'Timisoara', g: 118, h:329, verif: '>417'}
            }

        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Pitesti-Bucuresti',source: 'Pitesti_copil_Ramnicu_Valcea', target: 'Bucuresti_copil_Pitesti', type: 'straight'
            },
            {
                id: 'Pitesti-Craiova',source: 'Pitesti_copil_Ramnicu_Valcea', target: 'Craiova_copil_Pitesti', type: 'straight'
            },
            {
                id: 'Arad-Timisoara',source: 'Start', target: 'Timisoara_copil_Arad', type: 'straight'
            }
        ]
    },


    //Pasul 17
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 417}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>417'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>417'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>417'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100}
            },
            {
                id: 'Bucuresti_copil_Pitesti', type: 'nodul', position: {x:500 , y:700}, data: {label: 'Bucuresti', g: 418, h: 0, verif: '>417'}
            },
            {
                id: 'Craiova_copil_Pitesti', type: 'nodul', position: {x:700 , y:700}, data: {label: 'Craiova', g: 455, h: 160, verif: '>417'}
            },
            {
                id: 'Timisoara_copil_Arad',type: 'nodul', position: {x:400 , y:250}, data: {label: 'Timisoara', g: 118, h:329, verif: '>417'}
            },
            {
                 id: 'Zerind_copil_Arad', type: 'nodul', position: {x:600 , y:250}, data: {label: 'Zerind', g: 75, h:374}
            }

        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Pitesti-Bucuresti',source: 'Pitesti_copil_Ramnicu_Valcea', target: 'Bucuresti_copil_Pitesti', type: 'straight'
            },
            {
                id: 'Pitesti-Craiova',source: 'Pitesti_copil_Ramnicu_Valcea', target: 'Craiova_copil_Pitesti', type: 'straight'
            },
            {
                id: 'Arad-Timisoara',source: 'Start', target: 'Timisoara_copil_Arad', type: 'straight'
            },
             {
                id: 'Arad-Zerind', source: 'Start', target: 'Zerind_copil_Arad', type: 'straight'
            }
        ]
    },


    //Pasul 18
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 417}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>417'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>417'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>417'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100}
            },
            {
                id: 'Bucuresti_copil_Pitesti', type: 'nodul', position: {x:500 , y:700}, data: {label: 'Bucuresti', g: 418, h: 0, verif: '>417'}
            },
            {
                id: 'Craiova_copil_Pitesti', type: 'nodul', position: {x:700 , y:700}, data: {label: 'Craiova', g: 455, h: 160, verif: '>417'}
            },
            {
                id: 'Timisoara_copil_Arad',type: 'nodul', position: {x:400 , y:250}, data: {label: 'Timisoara', g: 118, h:329, verif: '>417'}
            },
            {
                 id: 'Zerind_copil_Arad', type: 'nodul', position: {x:600 , y:250}, data: {label: 'Zerind', g: 75, h:374, verif: '>417'}
            }

        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Pitesti-Bucuresti',source: 'Pitesti_copil_Ramnicu_Valcea', target: 'Bucuresti_copil_Pitesti', type: 'straight'
            },
            {
                id: 'Pitesti-Craiova',source: 'Pitesti_copil_Ramnicu_Valcea', target: 'Craiova_copil_Pitesti', type: 'straight'
            },
            {
                id: 'Arad-Timisoara',source: 'Start', target: 'Timisoara_copil_Arad', type: 'straight'
            },
             {
                id: 'Arad-Zerind', source: 'Start', target: 'Zerind_copil_Arad', type: 'straight'
            }
        ]
    },

    //Iteratia 6

    {
         noduri: [
        {id: 'Start', type: 'nodul',position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 418}}
        ],
        muchii: []
    },

    //Pasul 1
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 418}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            }
        ]
    },

    //Pasul 2
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 418}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 3
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 418}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
             {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            }
        ]
    },

    //Pasul 4
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 418}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
             {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>418'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            }
        ]
    },

    //Pasul 5
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 418}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>418'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 6
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 418}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>418'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>418'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 7
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 418}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>418'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>418'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            }
        ]
    },

    //Pasul 8
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 418}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>418'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>418'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            }
        ]
    },

    //Pasul 9
    {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 418}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>418'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>418'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>418'}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            }
        ]
    },
    //Pasul 10
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 418}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>418'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>418'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>418'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            }
        ]
    },

    //Pasul 11
     {
        noduri: [
            {
                id: 'Start', type: 'nodul', position: {x:400 , y:100}, data: {label: 'Arad', g: 0, h:366, c: 418}
            },
            {
                id: 'Sibiu_copil_Arad', type: 'nodul', position: {x:200 , y:250}, data: {label: 'Sibiu', g: 140, h:253}
            },
            {
                id: 'Fagaras_copil_Sibiu', type: 'nodul', position: {x:100 , y:400}, data: {label: 'Fagaras', g: 239, h: 176}
            },
            {
                id: 'Bucuresti_copil_Fagaras', type: 'nodul', position: {x:100 , y:550}, data: {label: 'Bucuresti', g: 450, h: 0, verif: '>418'}
            },
            {
                id: 'Oradea_copil_Sibiu', type: 'nodul', position: {x:280 , y:400}, data: {label: 'Oradea', g: 291, h: 380, verif: '>418'}
            },
            {
                id: 'Ramnicu_Valcea_copil_Sibiu', type: 'nodul', position: {x:450 , y:400}, data: {label: 'Ramnicu Valcea', g: 220, h: 193}
            },
            {
                 id: 'Craiova_copil_Ramnicu_Valcea', type: 'nodul', position: {x:390 , y:550}, data: {label: 'Craiova', g: 366, h: 160, verif: '>418'}
            },
            {
                 id: 'Pitesti_copil_Ramnicu_Valcea', type: 'nodul', position: {x:560 , y:550}, data: {label: 'Pitesti', g: 317, h: 100}
            },
            {
                id: 'Bucuresti_copil_Pitesti', type: 'nodul', position: {x:500 , y:700}, data: {label: 'Bucuresti', g: 418, h: 0}
            }
        ],
        muchii: [
            {
                id: 'Arad-Sibiu',source: 'Start', target: 'Sibiu_copil_Arad', type: 'straight'
            },
            {
                id: 'Sibiu-Fagaras',source: 'Sibiu_copil_Arad', target: 'Fagaras_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Fagaras-Bucuresti',source: 'Fagaras_copil_Sibiu', target: 'Bucuresti_copil_Fagaras', type: 'straight'
            },
            {
                 id: 'Sibiu-Oradea',source: 'Sibiu_copil_Arad', target: 'Oradea_copil_Sibiu', type: 'straight'
            },
            {
                 id: 'Sibiu-Ramnicu_Valcea',source: 'Sibiu_copil_Arad', target: 'Ramnicu_Valcea_copil_Sibiu', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Craiova',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Craiova_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Ramnicu_Valcea-Pitesti',source: 'Ramnicu_Valcea_copil_Sibiu', target: 'Pitesti_copil_Ramnicu_Valcea', type: 'straight'
            },
            {
                id: 'Pitesti-Bucuresti',source: 'Pitesti_copil_Ramnicu_Valcea', target: 'Bucuresti_copil_Pitesti', type: 'straight'
            }
        ]
    }
]