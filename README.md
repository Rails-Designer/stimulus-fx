# Stimulus Fx

Collection of useful action options for Stimulus.js controllers. See this article to learn how [custom action options in Stimulus](https://railsdesigner.com/stimulus-custom-action-options/) work.


**Sponsored By [Rails Designer](https://railsdesigner.com/)**

<a href="https://railsdesigner.com/" target="_blank">
  <img src="https://raw.githubusercontent.com/Rails-Designer/stimulus-fx/main/docs/rails_designer_icon.jpg" alt="Rails Designer logo"  width="240" />
</a>


## Install

**npm**
```bash
npm install stimulus-fx
```

**yarn**
```bash
yarn add stimulus-fx
```

**importmaps**
```bash
./bin/importmap pin stimulus-fx
```


## Usage

```javascript
// Import everything
import { registerActionOptions } from "stimulus-fx";
registerActionOptions(application);

// Or import specific actions
import { whenOutside } from "stimulus-fx/actions";
application.registerActionOption("whenOutside", whenOutside);
```

In your HTML:
```html
<div data-controller="dropdown">
  <button data-action="dropdown#show:stop">Show</button>

  <ul data-dropdown-target="menu" data-action="click@window->dropdown#hide:whenOutside">
  </ul>
</div>
```


## Available action options

- throttled
- whenOutside
- withMetaKey
- withConfirm


## License

stimulus-fx is released under the [MIT License](https://opensource.org/licenses/MIT).
