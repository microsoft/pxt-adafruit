//% blockId="delimiter_conv" block="%del"
export function delimiters(del : Delimiters) : string {
    switch(del) {
        case Delimiters.NewLine: return "\n";
        case Delimiters.Comma: return ",";
        case Delimiters.Dollar: return "$";
        case Delimiters.Colon: return ":";
        case Delimiters.Fullstop: return ".";
        case Delimiters.Hash: return "#";
        default: return "\n";
    }
}