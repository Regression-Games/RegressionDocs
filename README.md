# RegressionDocs

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
$ npm install yarn
$ yarn install
```

## Local Development

```bash
$ yarn start -p 3005
```

(Port 3005 is to avoid conflicts with the RG Client also running locally)

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.


## Best Practices for this Project

### Naming Conventions
* Names of markdown files and images are kebab-case
* Names of markdown files should match either their `sidebar_label` or top-level title
* Images should be given descriptive filenames that reflect what they're being used to demonstrate
* Markdown partials begin with an underscore (ex. `_shared_section.mdx`)

### File Structure
* Markdown files are organized in a way that mimics their layout in the site's sidebar. This makes it easier to locate a file or link from one page to another.
  * Ex. If the "Client Dashboard" page appears under "Session Insights" in the sidebar, then its path should be `docs/session-insights/client-dashboard.mdx`
* An image is always located within an `/img` directory at a reasonable depth in relation to the md that requires that image. The idea here is to make it easy to locate and link to images, so keep them close-by.
  * Rule of thumb -> either same level as the md, or at its parent's level (`img/my-image.png` or `../img/my-image.png`)
* If an `/img` dir contains many images or is shared by many pages, organize images into subdirectories that match the names of the markdown files they belong to.
  * Ex. images belonging to `docs/guides/creating-your-first-automated-test` should be located under `docs/guides/creating-your-first-automated-test/img` 
  
### Misc.
* DO NOT include important headers in partials - Docusaurus won't include these in the table-of-contents for any pages they are used in.