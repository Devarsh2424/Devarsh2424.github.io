var names=new Array();
names[0]="Devarsh";
names[1]="Vraj";
names[2]="Akshay";
names[3]="Josh";
names[4]="Aurgho";
names[5]="Sumit";
names[6]="Jake";
names[7]="Mahim";
names[8]="John";
names[9]="Paul";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}