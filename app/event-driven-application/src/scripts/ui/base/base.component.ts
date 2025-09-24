import { ChildFactoryFn } from "../../models";

export abstract class BaseComponent {
    parent: Element;
    abstract template(): string
    abstract getBindingEvents(): { [selector: string]: { event: string, handler: (ev: Event) => void}}
    private children: Map<string, ChildFactoryFn> = new Map()
    
    constructor(parent: Element){
        this.parent = parent
    }

    registerChild(selector: string, createComponent: ChildFactoryFn){
      this.children.set(selector, createComponent)
    }

    private renderChildren(){
      this.children.forEach((createComponent, selector) => {
        const element = this.parent.querySelector(selector)
        if(!element) return
        
        const child = createComponent(element)
        child.render()
      })
    }

    private bindEvents(template: DocumentFragment): void {
        const events = this.getBindingEvents();
        Object.entries(events).forEach(([key, { event, handler }]) => {
          const element = template.querySelector(key);
          if (!element) return;
    
          const handlers = Array.isArray(handler) ? handler : [handler];
    
          handlers.forEach((h) => {
            element.addEventListener(event, h);
          });
        });
    }


    renderList<T>(
        containerSelector: string,
        items: T[],
        idGenerator: (item: T) => string,
        componentFactory: (element: Element, item: T) => BaseComponent
    ) {
        const container = this.parent.querySelector(containerSelector);
        if (!container) {
            console.error(`Container not found: ${containerSelector}`);
            return;
        }

        container.innerHTML = items.map((item) => {
            const id = idGenerator(item);
            return `<li id="${id}" class="item-list-placeholder"></li>`;
        }).join("");

        items.forEach((item) => {
            const id = idGenerator(item);
            this.registerChild(`#${id}`, (element) => componentFactory(element, item));
        });

        this.renderChildren();
    }


    render(){

      this.parent.innerHTML = ''
        const template = document.createElement('template')
        template.innerHTML = this.template()

        this.bindEvents(template.content)
        this.parent.appendChild(template.content)

        this.renderChildren()
    }
}