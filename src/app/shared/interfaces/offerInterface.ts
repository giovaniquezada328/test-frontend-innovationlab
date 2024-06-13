export interface OffersInterface {
    id:                     number;
    nombre:                 string;
    marca:                  string;
    descripcion:            string;
    detalles:               string;
    peso:                   string;
    ancho:                  string;
    alto:                   string;
    largo:                  string;
    imagen:                 string;
    elementos_recomendados: number;
    fecha_registro:         Date;
    sku:                    string;
    activo:                 number;
    convertida:             number;
    unique_id:              string;
    marca_autoparte:        null;
    subsubcategoria:        null;
    precio:                 number;
}
