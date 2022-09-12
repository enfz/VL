## VL
https://enfz.github.io/VL/

VL is a project that takes data from vlr.gg using an API and allows users to compare the performances (different statistic values) of professional Valorant players from different regions over the past 90 dyas. Once the players are chosen, they will have their statistic values presented side by side with each other with a green font indicating that the player is better in that value, red font indicating that they are worse, and blue indicating that they have the same value. VL is made using Javascript, CSS, and HTML.

## Instructions

Access the site at: https://enfz.github.io/VL/

When using the site:

1. Please visit https://cors-anywhere.herokuapp.com/corsdemo to request temporary access for your client's session so that the proxy can be used
2. Select a region for the first player by pressing the title of the region in the dropdown.
3. *Please wait a few seconds to give the API time to load the data*
4. Begin typing the name of the player you are looking for or scroll through the options.
5. Select the first player you wish to compare.
6. Repeat the steps 1-3 for the second player.
7. Click the compare button and you will see the comparison of their stats.

* ***If you wish to deselect a player or region at any point click the reset button, which will reset all currently inputted values.***

## Credits

The API used for the site is made by Andre Saddler and can be found at https://github.com/axsddlr/vlrggapi

The CORS Anywhere NodeJS proxy by Rob Wu is used to add CORS headers and bypass the No 'Access-Control-Allow-Origin'
Header Present error and can be found at https://github.com/Rob--W/cors-anywhere

## License 

MIT License

Copyright (c) 2022 Enfei Zhang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
