class File {
    constructor(fullName, contents) {
        this._fullName = fullName;
        this.contents = contents;
        this._filename = this.fullName.split('.').reverse().slice(1).reverse().join('.');
        this._extension = this.fullName.split('.').pop();
        this.row = 0;
        this.col = 0;
      }
      get fullName() {
        return this._fullName;
      }
      get filename() {
        return this._filename;
      }
      get extension() {
        return this._extension;
      }
      getContents() {
        return this.contents;
      }
      
      write(str) {
        if ( this.contents !== "" ) {
          this.contents = this.contents + "\n";
        }
        this.contents = this.contents + str;
      }
      gets() {
        return this.contents.split('\n')[this.row++];
      }
      getc() {
        return this.contents[this.col++];
      }
}