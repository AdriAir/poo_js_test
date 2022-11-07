class Dog {

    constructor(Name, Race, Weight) {
        this.Name = Name;
        this.Race = Race;
        this.Weight = Weight;
        this.isSleep = false;
        this.isHungry = true;
        this.wantsToPoop = false;
        this.isDrug = false;
        this.isTired = true;

    }

    bark() {

        if (!this.isSleep) {

            return ("GUAU, GUAU!");

        } else {

            return (this.Name + " está durmiendo...");

        }

    }

    sleep() {

        if (this.isTired) {

            this.isSleep = true;
            return ("Se ha dormido...");

        } else {

            return (this.Name + " no tiene sueño. DROGALO! (o sacalo a pasear)");

        }
    }

    wakeUp() {
        this.isSleep = false;
        this.isTired = false;
        this.isDrug = false;
    }

    eat(food) {

        if (!this.isSleep) {

            if (food == null) {

                return ("Debes darle algún alimento");

            } else if (this.isHungry) {

                return (this.Name + " ha comido " + food + "!");
                this.wantsToPoop = true;
                this.isHungry = false;

            } else {

                return (this.Name + " está lleno.\nPrueba a pasearlo");

            }

        } else {

            return (this.Name + " está durmiendo...");

        }

    }

    goWalking() {

        if (!this.isSleep && !this.isDrug) {

            if (this.wantsToPoop) {

                return (this.Name + " ha hecho popó!");
                this.isTired = true;
                this.isHungry = true;
                this.wantsToPoop = false;

            } else {

                return (this.Name + " no tiene ganas de hacer popó...\nDale de comer.");

            }

        } else {

            return (this.Name + " está durmiendo o tiene sueño...");

        }

    }

    smoke(drug) {

        if (!this.isSleep) {

            if (drug == null) {

                return ("Debes especificar el tipo de droga...");

            } else if (!this.isTired) {

                return (this.Name + " se ha metido " + drug);
                this.isDrug = true;
                this.isTired = true;

            } else {

                return ("Tu mierda de perro quiere dormir, deja de darle " + drug);

            }

        }

    }

}