import React, { Component } from "react";
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
// function FieldGroup({ id, label, help, ...props }) {
//   return (
//     <FormGroup controlId={id}>
//       <ControlLabel>{label}</ControlLabel>
//       <FormControl {...props} />
//       {help && <HelpBlock>{help}</HelpBlock>}
//     </FormGroup>
//   );
// }

const Create = (
  <form>
    <FieldGroup
      id="formControlsText"
      type="text"
      label="正文"
      placeholder="请输入正文"
    />
    <FieldGroup
      id="formControlsEmail"
      type="email"
      label="邮件地址"
      placeholder="请输入邮件"
    />
    <FieldGroup
      id="formControlsPassword"
      label="密码"
      type="password"
    />
    <FieldGroup
      id="formControlsFile"
      type="file"
      label="文件"
      help="这里是块级别的帮助内容。"
    />

    <Checkbox checked readOnly>
      Checkbox
    </Checkbox>
    <Radio checked readOnly>
      Radio
    </Radio>

    <FormGroup>
      <Checkbox inline>
        1
      </Checkbox>
      {' '}
      <Checkbox inline>
        2
      </Checkbox>
      {' '}
      <Checkbox inline>
        3
      </Checkbox>
    </FormGroup>
    <FormGroup>
      <Radio inline>
        1
      </Radio>
      {' '}
      <Radio inline>
        2
      </Radio>
      {' '}
      <Radio inline>
        3
      </Radio>
    </FormGroup>

    <FormGroup controlId="formControlsSelect">
      <ControlLabel>选择框</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">选择项</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>
    <FormGroup controlId="formControlsSelectMultiple">
      <ControlLabel>多选框</ControlLabel>
      <FormControl componentClass="select" multiple>
        <option value="select">多选项</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>

    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>文字区域</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup>

    <FormGroup>
      <ControlLabel>静态文本</ControlLabel>
      <FormControl.Static>
        email@example.com
      </FormControl.Static>
    </FormGroup>

    <Button type="submit">
      提交
    </Button>
  </form>
);
export default Create;