const nuclearFusor = extendContent(Block, "nuclear-fusor", {
	placed (tile) {
		print(Block__calculateSpace(tile.x, tile.y))
	}
})



const squared = (a) => a*a
function Block__calculateSpace(originX, originY) {
	var passed = {};
	const range = 7;
	
	function walk(x, y) {
		if (passed[[x,y]])
			return 0;
		passed[[x,y]] = true;
		
		print([x,y])
		if (squared(x - originX) + squared(y - originY) > squared(range)
		  || (Vars.world.solid(x, y)))
			return 0;

		return 1 + walk(x+1, y) + walk(x-1, y) + walk(x, y+1) + walk(x, y-1)
	}
	return (
	    walk(originX+1, originY  )
	  + walk(originX-1, originY  )
	  + walk(originX  , originY+1)
	  + walk(originX  , originY-1)
	)/4;
}


const distiller = extendContent(Block, "nitrogen-distiller", {
	placed (tile) {
		print(Block__calculateSpace(tile.x, tile.y))
	},
	
	update(tile) {
		var javaEntity = tile.ent()
		
		javaEntity.liquids.add(result, )
	}
})
