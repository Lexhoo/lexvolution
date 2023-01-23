export class Email {

  private _civilite!: string;
  private _nom!: string;
  private _email!: string;
  private _message!: string;

  public get civilite() {
    return this._civilite;
  }

  public get nom() {
    return this._nom;
  }

  public get email() {
    return this._email;
  }

  public get message() {
    return this._message;
  }

  public set nom(valeur: string) {
    this._nom = valeur;
  }

  public set email(valeur: string) {
    this._email = valeur;
  }

  public set message(valeur: string) {
    this._message = valeur;
  }

  public set civilite(valeur: string) {
    this._civilite = valeur;
  }
}
