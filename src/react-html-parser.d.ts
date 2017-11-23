/** Declaration file generated by dts-gen */
/* tslint:disable */
export function convertNodeToElement(node: any, index: any, transform: any): any;

export function processNodes(nodes: any, transform: any): any;

export namespace convertNodeToElement {
    const prototype: {
    };

}

export namespace htmlparser2 {
    class CollectingHandler {
        constructor(cbs: any);

        onattribute(a: any, b: any): void;

        oncdataend(): void;

        oncdatastart(): void;

        onclosetag(a: any): void;

        oncomment(a: any): void;

        oncommentend(): void;

        onend(): void;

        onerror(a: any): void;

        onopentag(a: any, b: any): void;

        onopentagname(a: any): void;

        onprocessinginstruction(a: any, b: any): void;

        onreset(): void;

        ontext(a: any): void;

        restart(): void;

    }

    class DefaultHandler {
        constructor(callback: any, options: any, elementCB: any);

        oncdataend(): void;

        oncdatastart(): void;

        onclosetag(): void;

        oncomment(data: any): void;

        oncommentend(): void;

        onend(): void;

        onerror(error: any): void;

        onopentag(name: any, attribs: any): void;

        onparserinit(parser: any): void;

        onprocessinginstruction(name: any, data: any): void;

        onreset(): void;

        ontext(data: any): void;

    }

    class DomHandler {
        constructor(callback: any, options: any, elementCB: any);

        oncdataend(): void;

        oncdatastart(): void;

        onclosetag(): void;

        oncomment(data: any): void;

        oncommentend(): void;

        onend(): void;

        onerror(error: any): void;

        onopentag(name: any, attribs: any): void;

        onparserinit(parser: any): void;

        onprocessinginstruction(name: any, data: any): void;

        onreset(): void;

        ontext(data: any): void;

    }

    class FeedHandler {
        constructor(callback: any, options: any);

        init(callback: any, options: any, elementCB: any): void;

        onend(): any;

    }

    class Parser {
        constructor(cbs: any, options: any);

        done(chunk: any): void;

        end(chunk: any): void;

        onattribdata(value: any): void;

        onattribend(): void;

        onattribname(name: any): void;

        oncdata(value: any): void;

        onclosetag(name: any): void;

        oncomment(value: any): void;

        ondeclaration(value: any): void;

        onend(): void;

        onerror(err: any): void;

        onopentagend(): void;

        onopentagname(name: any): void;

        onprocessinginstruction(value: any): void;

        onselfclosingtag(): void;

        ontext(data: any): void;

        parseChunk(chunk: any): void;

        parseComplete(data: any): void;

        pause(): void;

        reset(): void;

        resume(): void;

        write(chunk: any): void;

    }

    class ProxyHandler {
        constructor(cbs: any);

        onattribute(a: any, b: any): void;

        oncdataend(): void;

        oncdatastart(): void;

        onclosetag(a: any): void;

        oncomment(a: any): void;

        oncommentend(): void;

        onend(): void;

        onerror(a: any): void;

        onopentag(a: any, b: any): void;

        onopentagname(a: any): void;

        onprocessinginstruction(a: any, b: any): void;

        ontext(a: any): void;

    }

    class RssHandler {
        constructor(callback: any, options: any);

        init(callback: any, options: any, elementCB: any): void;

        onend(): any;

    }

    class Stream {
        constructor(options: any);

    }

    class Tokenizer {
        constructor(options: any, cbs: any);

        end(chunk: any): void;

        getAbsoluteIndex(): any;

        pause(): void;

        reset(): void;

        resume(): void;

        write(chunk: any): void;

    }

    const EVENTS: {
        attribute: number;
        cdataend: number;
        cdatastart: number;
        closetag: number;
        comment: number;
        commentend: number;
        end: number;
        error: number;
        opentag: number;
        opentagname: number;
        processinginstruction: number;
        text: number;
    };

    function WritableStream(cbs: any, options: any): void;

    function createDomStream(cb: any, options: any, elementCb: any): any;

    function parseDOM(data: any, options: any): any;

    function parseFeed(feed: any, options: any): any;

    namespace CollectingHandler {

    }

    namespace DefaultHandler {

    }

    namespace DomHandler {

    }

    namespace DomUtils {
        function append(p0: any, p1: any): any;

        function appendChild(p0: any, p1: any): any;

        function compareDocumentPosition(p0: any, p1: any): any;

        function existsOne(p0: any, p1: any): any;

        function filter(p0: any, p1: any, p2: any, p3: any): any;

        function find(p0: any, p1: any, p2: any, p3: any): any;

        function findAll(p0: any, p1: any): any;

        function findOne(p0: any, p1: any): any;

        function findOneChild(p0: any, p1: any): any;

        function getAttributeValue(p0: any, p1: any): any;

        function getChildren(p0: any): any;

        function getElementById(p0: any, p1: any, p2: any): any;

        function getElements(p0: any, p1: any, p2: any, p3: any): any;

        function getElementsByTagName(p0: any, p1: any, p2: any, p3: any): any;

        function getElementsByTagType(p0: any, p1: any, p2: any, p3: any): any;

        function getInnerHTML(p0: any, p1: any): any;

        function getName(p0: any): any;

        function getOuterHTML(p0: any, p1: any): any;

        function getParent(p0: any): any;

        function getSiblings(p0: any): any;

        function getText(p0: any): any;

        function hasAttrib(p0: any, p1: any): any;

        function isTag(p0: any): any;

        function prepend(p0: any, p1: any): any;

        function removeElement(p0: any): any;

        function removeSubsets(p0: any): any;

        function replaceElement(p0: any, p1: any): any;

        function testElement(p0: any, p1: any): any;

        function uniqueSort(p0: any): any;

    }

    namespace ElementType {
        const CDATA: string;

        const Comment: string;

        const Directive: string;

        const Doctype: string;

        const Script: string;

        const Style: string;

        const Tag: string;

        const Text: string;

        function isTag(elem: any): any;

        namespace isTag {
            const prototype: {
            };

        }

    }

    namespace FeedHandler {

    }

    namespace Parser {

    }

    namespace ProxyHandler {

    }

    namespace RssHandler {

    }

    namespace Stream {

    }

    namespace Tokenizer {

    }

    namespace WritableStream {
        namespace prototype {
            const destroyed: boolean;

            const domain: any;

            function addListener(type: any, listener: any): any;

            function cork(): void;

            function destroy(err: any, cb: any): any;

            function emit(type: any, ...args: any[]): any;

            function end(chunk: any, encoding: any, cb: any): void;

            function eventNames(): any;

            function getMaxListeners(): any;

            function listenerCount(type: any): any;

            function listeners(type: any): any;

            function on(type: any, listener: any): any;

            function once(type: any, listener: any): any;

            function pipe(): void;

            function prependListener(type: any, listener: any): any;

            function prependOnceListener(type: any, listener: any): any;

            function removeAllListeners(type: any, ...args: any[]): any;

            function removeListener(type: any, listener: any): any;

            function setDefaultEncoding(encoding: any): any;

            function setMaxListeners(n: any): any;

            function uncork(): void;

            function write(chunk: any, encoding: any, cb: any): any;

            namespace addListener {
                // Too-deep object hierarchy from react_html_parser.htmlparser2.WritableStream.prototype.addListener
                const prototype: any;

            }

            namespace cork {
                // Too-deep object hierarchy from react_html_parser.htmlparser2.WritableStream.prototype.cork
                const prototype: any;

            }

            namespace destroy {
                // Too-deep object hierarchy from react_html_parser.htmlparser2.WritableStream.prototype.destroy
                const prototype: any;

            }

            namespace emit {
                // Too-deep object hierarchy from react_html_parser.htmlparser2.WritableStream.prototype.emit
                const prototype: any;

            }

            namespace end {
                // Too-deep object hierarchy from react_html_parser.htmlparser2.WritableStream.prototype.end
                const prototype: any;

            }

            namespace eventNames {
                // Too-deep object hierarchy from react_html_parser.htmlparser2.WritableStream.prototype.eventNames
                const prototype: any;

            }

            namespace getMaxListeners {
                // Too-deep object hierarchy from react_html_parser.htmlparser2.WritableStream.prototype.getMaxListeners
                const prototype: any;

            }

            namespace listenerCount {
                // Too-deep object hierarchy from react_html_parser.htmlparser2.WritableStream.prototype.listenerCount
                const prototype: any;

            }

            namespace listeners {
                // Too-deep object hierarchy from react_html_parser.htmlparser2.WritableStream.prototype.listeners
                const prototype: any;

            }

            namespace on {
                // Too-deep object hierarchy from react_html_parser.htmlparser2.WritableStream.prototype.on
                const prototype: any;

            }

            namespace once {
                // Too-deep object hierarchy from react_html_parser.htmlparser2.WritableStream.prototype.once
                const prototype: any;

            }

            namespace pipe {
                // Too-deep object hierarchy from react_html_parser.htmlparser2.WritableStream.prototype.pipe
                const prototype: any;

            }

            namespace prependListener {
                // Too-deep object hierarchy from react_html_parser.htmlparser2.WritableStream.prototype.prependListener
                const prototype: any;

            }

            namespace prependOnceListener {
                // Too-deep object hierarchy from react_html_parser.htmlparser2.WritableStream.prototype.prependOnceListener
                const prototype: any;

            }

            namespace removeAllListeners {
                // Too-deep object hierarchy from react_html_parser.htmlparser2.WritableStream.prototype.removeAllListeners
                const prototype: any;

            }

            namespace removeListener {
                // Too-deep object hierarchy from react_html_parser.htmlparser2.WritableStream.prototype.removeListener
                const prototype: any;

            }

            namespace setDefaultEncoding {
                // Too-deep object hierarchy from react_html_parser.htmlparser2.WritableStream.prototype.setDefaultEncoding
                const prototype: any;

            }

            namespace setMaxListeners {
                // Too-deep object hierarchy from react_html_parser.htmlparser2.WritableStream.prototype.setMaxListeners
                const prototype: any;

            }

            namespace uncork {
                // Too-deep object hierarchy from react_html_parser.htmlparser2.WritableStream.prototype.uncork
                const prototype: any;

            }

            namespace write {
                // Too-deep object hierarchy from react_html_parser.htmlparser2.WritableStream.prototype.write
                const prototype: any;

            }

        }

    }

    namespace createDomStream {
        const prototype: {
        };

    }

    namespace parseDOM {
        const prototype: {
        };

    }

    namespace parseFeed {
        const prototype: {
        };

    }

}

export namespace processNodes {
    const prototype: {
    };

}
