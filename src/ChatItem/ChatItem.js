import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ChatItem.css';


import {
    format,
} from'timeago.js';

import classNames from 'classnames';

export class ChatItem extends Component {

    render() {
        const statusColorType = this.props.statusColorType;
        return (
            <div
                className={classNames('rce-container-citem', this.props.active ? "active" : "", this.props.className)}
                onClick={(e) => {
                    
                    document.querySelectorAll(".rce-container-citem").forEach(element => {
                        if(element) {
                            element.classList.remove("active")
                        }
                    });
                    e.target.closest(".rce-container-citem").classList.add("active")
                    // console.log(e.target);

                    this.props.onClick()
                }}
                onContextMenu={this.props.onContextMenu}>
                <div className="rce-citem">
                    <div className={classNames(
                            "rce-citem-avatar",
                            {
                                'rce-citem-status-encircle': statusColorType === 'encircle',
                            }
                        )}>
                        {this.props.avatar}
                    </div>

                    <div className="rce-citem-body">
                        <div className="rce-citem-body--top">
                            <div className="rce-citem-body--top-title">
                                {this.props.title}
                            </div>
                            <div className="rce-citem-body--top-time">
                                {
                                    this.props.date &&
                                    !isNaN(this.props.date) &&
                                    (
                                        this.props.dateString ||
                                        format(this.props.date)
                                    )
                                }
                            </div>
                        </div>

                        <div className="rce-citem-body--bottom">
                            <div className="rce-citem-body--bottom-title">
                                {this.props.subtitle}
                            </div>
                            <div className="rce-citem-body--bottom-status">
                                {
                                    this.props.unread > 0 &&
                                    <span>{this.props.unread}</span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ChatItem.defaultProps = {
    id: '',
    onClick: null,
    active: false,
    avatar: PropTypes.element,
    avatarFlexible: false,
    alt: '',
    title: '',
    subtitle: '',
    date: new Date(),
    unread: 0,
    statusColor: null,
    statusColorType: 'badge',
    statusText: null,
    dateString: null,
    lazyLoadingImage: undefined,
    onAvatarError: () => void(0),
}

export default ChatItem;
