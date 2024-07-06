export class Candidat {
  //   public id: number;
  //   public prenom: string;

  constructor(
    public _id: number,
    public prenom: string,
    public nom: string,
    public age: number,
    public profession: string,
    public avatar?: string
  ) {
    // this.id = id;
    // this.prenom = prenom;
  }
}
