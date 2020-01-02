var items = Vars.content.items()
var data = Vars.data
for (var i = 0; i < items.size; i++) {
    var amt = data.getItem(items.get(i));
    if (amt < 1000000) {
        data.addItem(items.get(i), 1000000 - amt)
    }
}


function unlock(contents) {
    for (var i = 0; i < contents.size; i++) {
        data.unlockContent(contents.get(i))                                                  
    }
}

unlock(Vars.content.items())
unlock(Vars.content.blocks())
unlock(Vars.content.liquids())
unlock(Vars.content.zones())
unlock(Vars.content.units())
unlock(Vars.content.getBy(ContentType.loadout))

data.save()