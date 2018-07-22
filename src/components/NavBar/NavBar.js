import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Menubar } from '../../../node_modules/primereact/components/menubar/Menubar';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      items: [{
        label: 'File',
        icon: 'fa fa-fw fa-file-o',
        items: [{
          label: 'New',
          icon: 'fa fa-fw fa-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' },
          ],
        },
        { label: 'Open' },
        { separator: true },
        { label: 'Quit' },
        ],
      },
      {
        label: 'Edit',
        icon: 'fa fa-fw fa-edit',
        items: [
          { label: 'Undo', icon: 'fa fa-fw fa-mail-forward' },
          { label: 'Redo', icon: 'fa fa-fw fa-mail-reply' },
        ],
      },
      {
        label: 'Help',
        icon: 'fa fa-fw fa-question',
        items: [
          {
            label: 'Contents',
          },
          {
            label: 'Search',
            icon: 'fa fa-fw fa-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace',
                  },
                ],
              },
              {
                label: 'File',
              },
            ],
          },
        ],
      },
      {
        label: 'Actions',
        icon: 'fa fa-fw fa-gear',
        items: [
          {
            label: 'Edit',
            icon: 'fa fa-fw fa-refresh',
            items: [
              { label: 'Save', icon: 'fa fa-fw fa-save' },
              { label: 'Update', icon: 'fa fa-fw fa-save' },
            ],
          },
          {
            label: 'Other',
            icon: 'fa fa-fw fa-phone',
            items: [
              { label: 'Delete', icon: 'fa fa-fw fa-minus' },
            ],
          },
        ],
      },
      {
        label: 'Quit', icon: 'fa fa-fw fa-minus',
      },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            <h1>Menubar</h1>
            <p>Menubar is a horizontal menu component.</p>
          </div>
        </div>
        <div className="content-section implementation">
          <Menubar model={this.state.items}>
            <InputText placeholder="Search" type="text" />
            <Button label="Logout" icon="fa fa-sign-out" style={{ marginLeft: 4 }} />
          </Menubar>
        </div>
      </div>
    );
  }
}

export default NavBar;
