import React, { Component } from 'react';
import './ChatItem.css';

//import Avatar from '../Avatar/Avatar';

import {
    format,
} from'timeago.js';

import classNames from 'classnames';

export class ChatItem extends Component {

    render() {
        const statusColorType = this.props.statusColorType;
        const Avatar = this.props.avatar; 

        return (
            <div
                className={classNames('rce-container-citem', this.props.className)}
                onClick={this.props.onClick}
                onContextMenu={this.props.onContextMenu}>
                <div className="rce-citem">
                    <div className={classNames(
                            "rce-citem-avatar",
                            {
                                'rce-citem-status-encircle': statusColorType === 'encircle',
                            }
                        )}>
                        // Avatar
                        <Avatar />
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
    avatar: '',
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
