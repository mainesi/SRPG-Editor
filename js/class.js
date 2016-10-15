/**
 * Represents the data for a dynamic class
 *
 * @param {string} name - name of the class
 *
 * @constructor
 */ 
function Class(name) 
{
	this.dataKey = 'attributes';
	this.componentKey = 'components';
        this.attribCount = 0;
	this.components = [];
        
	// Class data
	this.data = [
            
                // GENERAL SETTINGS
                
		new StringValue('Name', 'name', name).setTooltip('The name of the class. This should not contain color codes'),
		new StringValue('Title', 'title', 'title').setTooltip('The prefix given to players who profess as the class which can contain color codes'),
		new StringValue('Template', 'template', 'NONE').setTooltip('A class group are things such as "race", "class", and "trade". Different groups can be professed through at the same time, one class from each group'),
                new ListValue('Texture Type', 'textureType', [ 'WEB', 'RESOURCE' ], 'TextureUri Type'),
		new StringValue('Texture Link', 'textureUri', 'NONE').setTooltip('A class group are things such as "race", "class", and "trade". Different groups can be professed through at the same time, one class from each group'),
		new StringValue('Cape Texture Link', 'capeTexture', 'NONE').setTooltip('A class group are things such as "race", "class", and "trade". Different groups can be professed through at the same time, one class from each group'),
		new StringValue('Overlay Texture Link', 'overlayTexture', 'NONE').setTooltip('A class group are things such as "race", "class", and "trade". Different groups can be professed through at the same time, one class from each group'),
		new ListValue('Faction', 'faction', factionList, 'Faction').setTooltip('The item that represents the class in GUIs'),
		new ListValue('Rotation Behavior', 'rotationBehavior', ['HeadRotation', 'NoRotation', 'RotateBody', 'Stalking' ], 'NoRotation').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new IntValue('Rotation Angle', 'rotation', 0).setTooltip('The maximum level the class can reach. If this class turns into other classes, this will also be the level it can profess into those classes.'),
		new ListValue('Job', 'job', jobList, 'None').setTooltip('The item that represents the class in GUIs'),
		new ListValue('Role', 'role', roleList, 'None').setTooltip('The item that represents the class in GUIs'),
		new ListValue('Visible', 'visible', ['YES', 'NO', 'PARTIAL' ], 'YES').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Model', 'modelType', modelList, 'NONE').setTooltip('The model that this NPC uses. This can be one of many used in-game.'),
                new ListValue('Gender', 'gender', [ 'MALE', 'FEMALE' ], 'MALE'),
                new IntValue('Size', 'size', 5).setTooltip('The size of this NPC. The default (that of a player) is 5. A child or smaller creature would be 3-4 and a larger NPC like a bear would be 7-8.'),
		new ListValue('Show Boss Bar', 'showBossBar', ['YES', 'NO', 'WHENATTACKING' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Show Nameplate', 'showName', ['YES', 'NO', 'WHENATTACKING' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                
                // GENERAL BEHAVIORS
                
                new ListValue('Avoids Water', 'avoidsWater', ['YES', 'NO' ], 'YES').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Door Interaction', 'doorInteraction', ['NONE', 'BREAK', 'OPEN' ], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Burns in Sun', 'burnsInSun', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Avoids Sun (if Possible)', 'avoidsSun', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Can Drown', 'canDrown', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Can Sprint', 'canSprint', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Can Swim', 'canSwim', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Has Living Animation', 'livingAnimation', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Ignore cobwebs when moving', 'ignoreCobwebs', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Interacts with other NPCs (Conversation)', 'interactWithOtherNPCs', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Shelters From', 'sheltersFrom', ['DARKNESS', 'SUNLIGHT', 'NONE' ], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Moving Animation', 'movingAnimation', ['NORMAL', 'DANCING', 'SITTING', 'CRAWLING', 'CRYING','HUGGING','SITTING','WAVING','SNEAKING' ], 'NORMAL').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),

                // COMBAT BEHAVIORS
                
                new ListValue('Can see Invisible Enemies', 'attackInvisible', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Defend Faction Members', 'defendFactionMembers', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Attack Hostile Factions', 'attackHostileFactions', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Must See Target When Attacking', 'mustSeeTarget', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Response to being attacked', 'attackedResponse', ['IGNORE', 'PANIC', 'RETREAT', 'RETALIATE' ], 'RETALIATE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new IntValue('Tactical Distance', 'tacticalDistance', 15).setTooltip('The maximum level the class can reach. If this class turns into other classes, this will also be the level it can profess into those classes.'),
                new ListValue('Tactical Behavior', 'tacticalBehavior', [ 'SURROUND', 'AMBUSH', 'HITNRUN', 'DODGE', 'STALK', 'NONE' ], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new IntValue('Aggro Distance', 'aggroDistance', 48).setTooltip('The maximum level the class can reach. If this class turns into other classes, this will also be the level it can profess into those classes.'),
                new ListValue('Ranged Weapon Usage', 'rangedBehavior', [ 'ALWAYS', 'UNTILCLOSE', 'WHENMOVING', 'NEVER' ], 'NEVER').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Aim when shooting with ranged weapon', 'aimWhileShooting', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),

                // GENERAL STATS
                new IntValue('Maximum Health', 'maxHealth', 100).setTooltip('The maximum level the class can reach. If this class turns into other classes, this will also be the level it can profess into those classes.'),
                
                // DEFENSIVE STATS
                
                new ListValue('Health Regen (Passive)', 'passiveHealthRegen', ['NONE', 'LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST'], 'LOW').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Health Regen (Combat)', 'combatHealthRegen', ['NONE', 'LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST'], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Projectile Resistance', 'projectileResistance', ['NONE', 'LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST', 'COMPLETE'], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Melee Resistance', 'projectileResistance', ['NONE', 'LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST', 'COMPLETE'], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Explosion Resistance', 'projectileResistance', ['NONE', 'LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST', 'COMPLETE'], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Knockback Resistance', 'projectileResistance', ['NONE', 'LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST', 'COMPLETE'], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Immune to Potions', 'immuneToPotions', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Immune to Fire', 'immuneToFire', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),

                // MELEE OFFENSIVE STATS
		new ListValue('Melee Range', 'meleeRange', ['LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST', 'CRAZY', 'INSANE' ], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Melee Damage', 'meleeDamage', ['LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST', 'CRAZY', 'INSANE' ], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Melee Knockback', 'meleeKnockback', ['NONE', 'LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST', 'CRAZY', 'INSANE' ], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                
               // RANGED OFFENSIVE STATS
		new ListValue('Ranged Range', 'rangedRange', ['LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST', 'CRAZY', 'INSANE' ], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Ranged Damage', 'meleeDamage', ['LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST', 'CRAZY', 'INSANE' ], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Ranged Knockback', 'rangedKnockback', ['NONE', 'LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST', 'CRAZY', 'INSANE' ], 'NONE').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),

                // RANGED PROJECTILE SETTINGS
                new ListValue('Ranged Projectile Behavior', 'rangedWeaponBehavior', ['NONE', 'PISTOL', 'MACHINEGUN', 'SHOTGUN', 'BOW', 'SNIPER', 'PLASMASTAFF', 'PLASMAPISTOL'], 'PISTOL').setTooltip('Ranged Projectile behavior defines the approximate fire rate and projectile speed of a NPCs ranged weapon. It doesnt control sound, appearance, range or damage of the projectile or weapon.'),
		new ListValue('Ranged Projectile Appearance', 'projectileAppearance', ['ARROW', 'BULLET', 'BLUEPLASMA', 'REDPLASMA', 'WHITEPLASMA' , 'GOLDPLASMA'], 'ARROW').setTooltip('What does the projectile this NPC has appear to look like?'),
		new ListValue('Ranged Projectile Size', 'projectileSize', ['TINY' , 'SMALL', 'MEDIUM', 'LARGE', 'HUGE' ], 'TINY').setTooltip('What is the size of the NPCs projectile? A Bullet is TINY, an arrow would be MEDIUM and a staff blast is up to you!'),
                new ListValue('Projectile Explosive Type', 'projectileExplosionType', ['NONE', 'SMALL', 'MEDIUM', 'LARGE' ], 'NONE').setTooltip('Whether or not the NPCs projectile is explosive. This currently bypasses grief prevention and should not be enabled for NPCs with possible access to protected areas.'),

                // LOADOUT SETTINGS
		new ListValue('MainHand Item (Item Name)', 'mainHandItemName', itemList, 'NONE').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('MainHand Item (Damage value)', 'mainHandItemDamage', damageList, '0').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('OffHand Item (Item Name)', 'offHandItemName', itemList, 'NONE').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('OffHand Item (Damage value)', 'offHandItemDamage', damageList, '0').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Head Item (Item Name)', 'headItemName', itemList, 'NONE').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Head Item (Damage value)', 'headItemDamage', damageList, '0').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Chest Item (Item Name)', 'chestItemName', itemList, 'NONE').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Chest Item (Damage value)', 'chestItemDamage', damageList, '0').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Leg Item (Item Name)', 'legItemName', itemList, 'NONE').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Leg Item (Damage value)', 'legItemDamage', damageList, '0').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Feet Item (Item Name)', 'feetItemName', itemList, 'NONE').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Feet Item (Damage value)', 'feetItemDamage', damageList, '0').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Respawns', 'respawnSetting', ['ALWAYS', 'DAY', 'NIGHT', 'NEVER' ], 'ALWAYS').setTooltip('Sets when this NPC will respawn, if it does.'),
		new ListValue('Respawn Delay', 'respawnDelay', ['INSTANT', '1MIN', '5MIN', '10MIN', '15MIN', '30MIN', '45MIN', '1HR', '2HR', '3HR', '4HR', '8HR', 'SERVERRESTART' ], '15MIN').setTooltip('Sets how long until this NPC respawns.'),
                new ListValue('Respawns at original spawn location', 'respawnsAtSpawn', ['YES', 'NO' ], 'YES').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Dead body is hidden', 'hideDeadBody', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Naturally Despawns', 'naturallyDespawns', ['YES', 'NO' ], 'NO').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
		new ListValue('Faction Importance', 'factionImportance', [ 'NONE', 'LOWEST', 'LOW', 'MEDIUM','HIGH', 'HIGHEST' ], 'NONE').setTooltip('Faction Importance controls the amount of reputation granted or lost from the faction this NPC belongs to when it is killed. It also affects the reputation with this factions enemies.'),
		new ListValue('Dropped Item (Loot Item 1)', 'lootItemItem1', itemList, 'NONE').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Chance for Drop (Loot Item 1)', 'lootItemChance1', chanceList, '0').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Number for Drop (Loot Item 1)', 'lootItemNumber1', stackList, '1').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Damage value for Drop (Loot Item 1)', 'lootItemDamage1', damageList, '0').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
                new ListValue('Dropped Item (Loot Item 2)', 'lootItemItem2', itemList, 'NONE').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Chance for Drop (Loot Item 2)', 'lootItemChance2', chanceList, '0').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Number for Drop (Loot Item 2)', 'lootItemNumber2', stackList, '1').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Damage value for Drop (Loot Item 2)', 'lootItemDamage2', damageList, '0').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
                new ListValue('Dropped Item (Loot Item 3)', 'lootItemItem3', itemList, 'NONE').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Chance for Drop (Loot Item 3)', 'lootItemChance3', chanceList, '0').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Number for Drop (Loot Item 3)', 'lootItemNumber3', stackList, '1').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Dropped Item (Loot Item 4)', 'lootItemItem4', itemList, 'NONE').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Chance for Drop (Loot Item 4)', 'lootItemChance4', chanceList, '0').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Number for Drop (Loot Item 4)', 'lootItemNumber4', stackList, '1').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Dropped Item (Loot Item 5)', 'lootItemItem5', itemList, 'NONE').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Chance for Drop (Loot Item 5)', 'lootItemChance5', chanceList, '0').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Number for Drop (Loot Item 5)', 'lootItemNumber5', stackList, '1').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Dropped Item (Loot Item 6)', 'lootItemItem6', itemList, 'NONE').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Chance for Drop (Loot Item 6)', 'lootItemChance6', chanceList, '0').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Number for Drop (Loot Item 6)', 'lootItemNumber6', stackList, '1').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Dropped Item (Loot Item 7)', 'lootItemItem7', itemList, 'NONE').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Chance for Drop (Loot Item 7)', 'lootItemChance7', chanceList, '0').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Number for Drop (Loot Item 7)', 'lootItemNumber7', stackList, '1').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Dropped Item (Loot Item 8)', 'lootItemItem8', itemList, 'NONE').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Chance for Drop (Loot Item 8)', 'lootItemChance8', chanceList, '0').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Number for Drop (Loot Item 8)', 'lootItemNumber8', stackList, '1').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Dropped Item (Loot Item 9)', 'lootItemItem9', itemList, 'NONE').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Chance for Drop (Loot Item 9)', 'lootItemChance9', chanceList, '0').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
		new ListValue('Number for Drop (Loot Item 9)', 'lootItemNumber9', stackList, '1').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.'),
                new ListValue('Movement Speed', 'movementSpeed', [ 'SLOWEST', 'SLOW', 'NORMAL', 'FAST', 'FASTEST' ], 'NORMAL').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
                new ListValue('Movement Type', 'movementType', [ 'NONE', 'WANDERING', 'MOVINGPATH' ], 'Select a movement type').setTooltip('Defines whether or not this NPC can move, and if so, how it behaves.'),
		new ListValue('Wandering Distance', 'wanderingDistance', wanderingList, '1').setTooltip('This is a predefined list of items and weapons NPCs are allowed to hold.')

//              new ListValue('Parent', 'parent', ['None'], 'None').setTooltip('The class that turns into this one. For example, if Fighter turns into Knight, then Knight would have its parent as Fighter'),
//		new ListValue('Permission', 'needs-permission', ['True', 'False'], 'False').setTooltip('Whether or not the class requires a permission to be professed as. The permission would be "skillapi.class.{className}"'),
//                new ByteListValue('Exp Sources', 'exp-source', [ 'Mob', 'Block Break', 'Block Place', 'Craft', 'Command', 'Special', 'Exp Bottle', 'Smelt', 'Quest' ], 273).setTooltip('The experience sources the class goes up from. Most of these only work if "use-exp-orbs" is enabled in the config.yml.'),
//		new AttributeValue('Health', 'health', 20, 0).setTooltip('The amount of health the class has'),
//		new DoubleValue('Mana Regen', 'mana-regen', 1, 0).setTooltip('The amount of mana the class regens each interval. The interval is in the config.yml and by default is once every second. If you want to regen a decimal amount per second, increase the interval.'),
//		new ListValue('Skill Tree', 'tree', [ 'Basic Horizontal', 'Basic Vertical', 'Level Horizontal', 'Level Vertical', 'Flood', 'Requirement' ], 'Requirement'),
//		new StringListValue('Skills (one per line)', 'skills', []).setTooltip('The skills the class is able to use'),
//		new ListValue('Icon', 'icon', materialList, 'Jack O Lantern').setTooltip('The item that represents the class in GUIs'),
//		new IntValue('Icon Data', 'icon-data', 0).setTooltip('The data/durability value of the item that represents the class in GUIs'),
//		new StringListValue('Icon Lore', 'icon-lore', [
//			'&d' + name
//		]).setTooltip('The text shown on the item for the class in GUIs')
	];
    
    this.updateAttribs(10);
}

Class.prototype.updateAttribs = function(i)
{
    var j = 0;
    var back = {};
    while (this.data[i + j] instanceof AttributeValue)
    {
        back[this.data[i + j].key.toLowerCase()] = this.data[i + j];
        j++;
    }
    this.data.splice(i, this.attribCount);
    this.attribCount = 0;
    for (j = 0; j < ATTRIBS.length; j++)
    {
        var attrib = ATTRIBS[j].toLowerCase();
        var format = attrib.charAt(0).toUpperCase() + attrib.substr(1);
        this.data.splice(i + j, 0, new AttributeValue(format, attrib.toLowerCase(), 0, 0)
            .setTooltip('The amount of ' + attrib + ' the class should have')
        );
        if (back[attrib]) 
        {
            var old = back[attrib];
            this.data[i + j].base = old.base;
            this.data[i + j].scale = old.scale;
        }
        this.attribCount++;
    }
};

/**
 * Creates the form HTML for editing the class and applies it to
 * the appropriate area on the page
 */
Class.prototype.createFormHTML = function()
{
	var form = document.createElement('form');
	
	var header = document.createElement('h4');
	header.innerHTML = 'NPC Details';
	form.appendChild(header);
	
	var h = document.createElement('hr');
	form.appendChild(h);
	
//	this.data[5].list.splice(1, this.data[5].list.length - 1);
//	for (var i = 0; i < classes.length; i++)
//	{
//		if (classes[i] != this) 
//		{
//			this.data[5].list.push(classes[i].data[0].value);
//		}
//	}
	for (var i = 0; i < this.data.length; i++)
	{
            if (this.data[i].name == 'Name') {
                var header = document.createElement('h4');
                header.innerHTML = 'General Settings';
                form.appendChild(header);
            }
            if (this.data[i].name == 'Avoids Water') {
                var header = document.createElement('h4');
                header.innerHTML = 'General Behavior';
                form.appendChild(header);
            }
            if (this.data[i].name == 'Can see Invisible Enemies') {
                var header = document.createElement('h4');
                header.innerHTML = 'Combat Behavior';
                form.appendChild(header);
            }
            if (this.data[i].name == 'Maximum Health') {
                var header = document.createElement('h4');
                header.innerHTML = 'General Stats';
                form.appendChild(header);
            }
            if (this.data[i].name == 'Health Regen (Passive)') {
                var header = document.createElement('h4');
                header.innerHTML = 'Defensive Stats';
                form.appendChild(header);
            }
            if (this.data[i].name == 'Melee Range') {
                var header = document.createElement('h4');
                header.innerHTML = 'Melee Offensive Stats';
                form.appendChild(header);
            }
            if (this.data[i].name == 'Ranged Range') {
                var header = document.createElement('h4');
                header.innerHTML = 'Ranged Offensive Stats';
                form.appendChild(header);
            }
            if (this.data[i].name == 'Ranged Projectile Behavior') {
                var header = document.createElement('h4');
                header.innerHTML = 'Ranged Projectile Settings';
                form.appendChild(header);
            }
            if (this.data[i].name == 'MainHand Item (Item Name)') {
                var header = document.createElement('h4');
                header.innerHTML = 'Loadout';
                form.appendChild(header);
            }
            if (this.data[i].name == 'Respawns') {
                var header = document.createElement('h4');
                header.innerHTML = 'Death and Respawn Handling';
                form.appendChild(header);
            }
            if (this.data[i].name == 'Faction Importance') {
                var header = document.createElement('h4');
                header.innerHTML = 'Death Rewards and Consequences';
                form.appendChild(header);
            }
            if (this.data[i].name == 'Dropped Item (Loot Item 1)') {
                var header = document.createElement('h4');
                header.innerHTML = 'Item Loot Table';
                form.appendChild(header);
            }            
            if (this.data[i].name == 'Movement Speed') {
                var header = document.createElement('h4');
                header.innerHTML = 'Movement Settings';
                form.appendChild(header);
            }
		this.data[i].createHTML(form);
        
        // Append attributes
        if (this.data[i].name == 'Faction')
        {
            this.updateAttribs(i + 1);
        }
	}
	
	var hr = document.createElement('hr');
	form.appendChild(hr);
	
	var save = document.createElement('h5');
	save.innerHTML = 'Save',
	save.classData = this;
	save.addEventListener('click', function(e) {
		this.classData.update();
		saveToFile(this.classData.data[0].value + '.yml', this.classData.getSaveString());
	});
	form.appendChild(save);
	
	var del = document.createElement('h5');
	del.innerHTML = 'Delete',
	del.className = 'cancelButton';
	del.addEventListener('click', function(e) {
		var list = document.getElementById('classList');
		var index = list.selectedIndex;
		
		classes.splice(index, 1);
		if (classes.length == 0)
		{
			newClass();
		}
		list.remove(index);
		index = Math.min(index, classes.length - 1);
		activeClass = classes[index];
		list.selectedIndex = index;
	});
	form.appendChild(del);
	
	var target = document.getElementById('classForm');
	target.innerHTML = '';
	target.appendChild(form);
};

/**
 * Updates the class data from the details form if it exists
 */
Class.prototype.update = function()
{
	var index;
	var list = document.getElementById('classList');
	for (var i = 0; i < classes.length; i++)
	{
		if (classes[i] == this)
		{
			index = i;
			break;
		}
	}
	var prevName = this.data[0].value;
	for (var j = 0; j < this.data.length; j++)
	{
		this.data[j].update();
	}
	var newName = this.data[0].value;
	this.data[0].value = prevName;
	if (isClassNameTaken(newName)) return;
	this.data[0].value = newName;
	list[index].text = this.data[0].value;
};

/**
 * Creates and returns a save string for the class
 */ 
Class.prototype.getSaveString = function()
{
	var saveString = '';
	
	saveString += "npc:\n";
	for (var i = 0; i < this.data.length; i++)
	{
		if (this.data[i] instanceof AttributeValue) continue;
		saveString += this.data[i].getSaveString('  ');
	}
	return saveString;
};

/**
 * Loads class data from the config lines stating at the given index
 *
 * @param {YAMLObject} data - the data to load
 *
 * @returns {Number} the index of the last line of data for this class
 */
Class.prototype.load = loadSection;

/**
 * Creates a new class and switches the view to it
 *
 * @returns {Class} the new class
 */ 
function newClass()
{
	var id = 1;
	while (isClassNameTaken('NPC ' + id)) id++;
	
	activeClass = addClass('NPC ' + id);
	
	var list = document.getElementById('classList');
	list.selectedIndex = list.length - 2;
	
	activeClass.createFormHTML();
	
	return activeClass;
}

/**
 * Adds a skill to the editor without switching the view to it
 *
 * @param {string} name - the name of the skill to add
 *
 * @returns {Skill} the added skill
 */ 
function addClass(name) 
{
	var c = new Class(name);
	classes.push(c);
	
	var option = document.createElement('option');
	option.text = name;
	var list = document.getElementById('classList');
	list.add(option, list.length - 1);
	
	return c;
}

/**
 * Checks whether or not a class name is currently taken
 *
 * @param {string} name - name to check for
 *
 * @returns {boolean} true if the name is taken, false otherwise
 */ 
function isClassNameTaken(name)
{
	return getClass(name) != null;
}

/**
 * Retrieves a class by name
 *
 * @param {string} name - name of the class to retrieve
 *
 * @returns {Class} the class with the given name or null if not found
 */
function getClass(name)
{
	name = name.toLowerCase();
	for (var i = 0; i < classes.length; i++)
	{
		if (classes[i].data[0].value.toLowerCase() == name) return classes[i];
	}
	return null;
}

var activeClass = new Class('NPC 1');
var classes = [activeClass];
activeClass.createFormHTML();