//-------------------------------------------------//
//                    MIT License                  //
//    Copyright (c) 2025 EFramework Organization   //
//          SEE LICENSE.md FOR MORE DETAILS        //
//-------------------------------------------------//

export class Writer {
    private mIndent = "\t"
    private mTabIdx = 0
    private mTabStr = ""
    private mLines: string[] = []

    constructor(indent: string = "\t") { this.mIndent = indent }

    public Reset() {
        this.mTabIdx = 0
        this.mTabStr = ""
        this.mLines.length = 0
    }

    public Indent() {
        this.mTabIdx++
        this.mTabStr = this.mIndent.repeat(this.mTabIdx)
    }

    public Outdent() {
        if (this.mTabIdx > 0) {
            this.mTabIdx--
            this.mTabStr = this.mIndent.repeat(this.mTabIdx)
        } else this.mTabStr = ""
    }

    public Line(line: string = "") { this.mLines.push(`${this.mTabStr}${line}`) }

    public Flush(): string { return this.mLines.join("\n") }
}
