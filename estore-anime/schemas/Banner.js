export default {
    name:'banner',
    title:'Banner',
    type:'document',

    fields:[
        {
            name:'image',
            title:'Image',
            type:'array',
            of:[{type:'image',}],
            options:{
                hotspot: true,
            },
        },
            {
                name:'sale',
                title:'Sale Text',
                type:'string',
            },
            {
                name:'slug',
                title:'Slug',
                type:'slug',
                options:{
                    source:'sale',
                    maxLength:90,
                }
            },
            {
                name:'sizeof',
                title:'Size',
                type:'string',
            },
            {
                name:'name',
                title:'Name',
                type:'string',
            },
            {
                name:'captions',
                title:'Captions',
                type:'string',
            },
            {
                name:'oldprice',
                title:'Old Price',
                type:'number',
            },
            {
                name:'newprice',
                title:'New Price',
                type:'number',
            }

        
    ]
}