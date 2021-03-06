/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import ComponentDocs from 'app_modules/site/components/page/component/docs';
import Tooltip from 'ui/components/tooltips/index.react';
import Lorem from 'react-lorem-component';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import Control from 'ui/components/lib/control/flavors/popover';
import { prefix as pf } from 'app_modules/ui/util/component';

export const intro = (
  <p className="site-text-introduction">
    Tooltips provide additional information about a particular input field or element on the page.
  </p>
);

export default (
  <ComponentDocs>
    <p>The popup text appears when the user hovers or tabs into the “info” icon and disappears when the user hovers off or tabs away.</p>
    <h4 className="site-text-heading--label">Accessibility</h4>
    <p>Showing the tooltip on hover or on keyboard focus ensures that all users can access it, even if they aren&rsquo;t using a mouse.
    Give the tooltip an ID and use that as the value of the <code>aria-describedby</code> attribute of the DOM element it describes. This helps users of assistive technology read the tooltip content.</p>
  </ComponentDocs>
);
