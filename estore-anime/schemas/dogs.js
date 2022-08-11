export default {
    name: 'dogs',
    title:'Dogs',
    type:'document',

    fields:[
        {
            name:'image',
            title:'Image',
            type:'image',
            options:{
                hotspot: true,
            }
        },
        {
            name:'name',
            title:'Dogname',
            type:'string',
        },
        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'name',
                maxLength: 80,
            }
        },
        {
            name:'breed',
            title:'Breed',
            type:'string',
        },
        {
            name:'rating',
            title:"Rating",
            type:'number',
        },
        {
            name:'age',
            title:'Age',
            type:'number',
        },
        {
            name:'gender',
            title:'Gender',
            type:'string',
        },
        {
            name:'details',
            title:'Details',
            type:'string',
        },
        {
            name:'price',
            title:'Price',
            type: 'number',
        }

    ]
}