NDSummary.OnToolTipsLoaded("File2:Registry/Registry.h",{158:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype158\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Registry</div></div></div><div class=\"TTSummary\">A container class to contain information about corridors, survivors and rooms.&nbsp; The class utilises vectors to store the information.</div></div>",107:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype107\" class=\"NDPrototype NoParameterForm\">Registry() : _corridorCounter(<span class=\"SHNumber\">0</span>)</div><div class=\"TTSummary\">Initialise object</div></div>",108:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype108\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addNewCorridor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">faceDirectionAngle,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isDiscoveredByWallCollision</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">adds new corridor</div></div>",120:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype120\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addNewRoom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PName last\">detectedZumoSide</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds new room</div></div>",121:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype121\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int</span> getLastCorridorId()</div><div class=\"TTSummary\">Returns last corridor\'s id</div></div>",122:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype122\" class=\"NDPrototype NoParameterForm\">int8_t getLastRoomId()</div><div class=\"TTSummary\">Returns the last room id</div></div>",123:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype123\" class=\"NDPrototype NoParameterForm\">int8_t getLastSurvivorId()</div><div class=\"TTSummary\">Returns last survivor id</div></div>",124:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype124\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addNewSurvivorForLastRoom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">left_side,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">right_side</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds new survivor for the last room</div></div>",125:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype125\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> isExistingSurvivor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">degree</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns whether the survivor exists already at a given angle of the compass</div></div>",126:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype126\" class=\"NDPrototype NoParameterForm\">int8_t getCorridorIdForLastRoom()</div><div class=\"TTSummary\">Returns last corridor for recently added room</div></div>"});