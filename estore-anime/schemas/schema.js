// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import Banner from "./Banner"
import Tshirt from "./Tshirt"
import OnePiece from './OnePiece'
import Naruto from './Naruto'
import DemonSlayer from './DemonSlayer'
import Aot from './Aot'
import Shoe from './Shoe'
import Jackets from './Jackets'
import Products from './Products'
import Collection  from './Collection'



export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    Banner,Products,Tshirt,DemonSlayer,OnePiece,Aot,
   Naruto,Shoe,Jackets,Collection
  ]),
})
