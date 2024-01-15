#NPM
- It is not Node Package Manager or Nanannnana Pat Man.
- It just works as a package manager.

Two types of dependicies normally, Dev or Normal.
Dev: Used in dev phase
Normal: used in production env.

In npm -D is used to get the Dev build.

====> Package.json & package-lock.json
~(tilde) or ^(caret) is used before version of dependiences.
^ installs minor ver of dependicies automatically
~ installs major ver of dependicies automatically

- After doing these things a package-lock.json file would be created.
  It keeps track of every version of dependicies installed like history of all installs.
  Also, stores other attributes like hasesh etc.

- Transitive dependicies: A dependicy having to depend on other dependicies which depend on other dependicies and so on.

*- To add support for older browser you can add a array of "browserslist": ["last no._of_version versions of Application_Name"]

*- Adding Scripts:
you add it by in the script block inserting "script_name": "command"



==> NPX 
It's used to execute a package.

===> Parcel
- "npx parcel file_name"
- Its a local server
- HMR: Hot Module Replacement
- File Watching Algo: written in C++
- Caching : allows faster build
- Does Image Optimization
- Minification, Compressing of files
- Bundling
- Consistent Hashing
- Diffrential Bundling: Allows support of older browsers.
- Code Splitting
- Diagnostics
- Error Handling
- Tree Shaking: Removes unused code.
- Diff dev and prod bundles

** Troubleshooting of Parcel **

- Did you mean "app.html"?
This occurs when a conflict between package.json occurs while building.
To fix it just remove "main": -- from package.json
